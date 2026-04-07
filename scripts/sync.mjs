#!/usr/bin/env node

/**
 * sync.mjs
 * --------
 * Syncs OpenClaw GitHub Releases into index.html's CHANGELOG_DATA.
 * Groups releases by month (monthly archive).
 *
 * Usage:
 *   GITHUB_TOKEN=ghp_xxx node scripts/sync.mjs
 *
 * Without GITHUB_TOKEN, uses unauthenticated API (60 req/hr limit).
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const INDEX_HTML = join(ROOT, 'index.html');

const REPO = 'openclaw/openclaw';
const API_BASE = 'https://api.github.com';

// Tag mapping: section headers in release body → tag categories
const SECTION_TAGS = {
  'Breaking': 'Breaking',
  'Changes':  '新功能',
  'Fixes':    '修复',
};

function detectTag(currentSection) {
  return SECTION_TAGS[currentSection] || '新功能';
}

/**
 * Parse release body into features array.
 *
 * OpenClaw release format:
 *   ### Breaking
 *   - description text
 *   ### Changes
 *   - description text
 *   ### Fixes
 *   - description text
 */
function parseFeatures(body) {
  if (!body) return [];

  const features = [];
  const lines = body.split('\n');
  let currentSection = '';

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('<!--')) continue;

    // Match section headers: ### Breaking, ### Changes, ### Fixes
    const sectionMatch = trimmed.match(/^###\s+(.+)$/);
    if (sectionMatch) {
      currentSection = sectionMatch[1].trim();
      continue;
    }

    // Match bullet items: - text...
    const bulletMatch = trimmed.match(/^[-*]\s+(.+)$/);
    if (bulletMatch) {
      const text = bulletMatch[1].trim();
      // Extract title: first sentence or first clause (before : or ；)
      const sepIdx = text.search(/[:：]/);
      const commaIdx = text.search(/[,，]/);
      let titleEnd = -1;

      if (sepIdx > 0 && sepIdx < 50) {
        titleEnd = sepIdx;
      } else if (commaIdx > 0 && commaIdx < 30) {
        titleEnd = commaIdx;
      }

      const title = titleEnd > 0
        ? text.slice(0, titleEnd).replace(/[,，.。:：]$/, '')
        : text.slice(0, 40).replace(/[,，.。:：]$/, '');

      features.push({
        title: title.trim(),
        tag: detectTag(currentSection),
        summary: text.slice(0, 60),
        detail: text,
      });
      continue;
    }

    // Continuation line for current feature
    if (features.length > 0 && !trimmed.startsWith('#') && !trimmed.match(/^[-*]/)) {
      const last = features[features.length - 1];
      last.detail += (last.detail ? '\n' : '') + trimmed;
    }
  }

  // Ensure summary is set
  for (const f of features) {
    if (!f.summary) {
      f.summary = f.detail.slice(0, 60);
    }
  }

  return features;
}

async function fetchReleases() {
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'openlaw-changelog-sync',
  };

  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers['Authorization'] = `token ${token}`;
  }

  const allReleases = [];
  let page = 1;

  while (true) {
    const url = `${API_BASE}/repos/${REPO}/releases?per_page=100&page=${page}`;
    console.log(`Fetching releases page ${page}...`);

    const res = await fetch(url, { headers });

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`GitHub API error: ${res.status} ${res.statusText}\n${body}`);
    }

    const releases = await res.json();
    if (releases.length === 0) break;

    allReleases.push(...releases);

    if (releases.length < 100) break;
    page++;
  }

  return allReleases;
}

function releaseToChangelogEntry(release) {
  let version = release.tag_name || release.name || '';
  if (!version.startsWith('v')) {
    version = 'v' + version;
  }

  const date = release.published_at
    ? release.published_at.split('T')[0]
    : release.created_at?.split('T')[0] || '';

  const features = parseFeatures(release.body);

  return { version, date, features };
}

/**
 * Group flat entries by month into the CHANGELOG_DATA format.
 */
function groupByMonth(entries) {
  const monthMap = new Map();

  for (const entry of entries) {
    const [year, month] = entry.date.split('-');
    const monthKey = `${year}-${month}`;
    const monthLabel = `${year} 年 ${parseInt(month)} 月`;

    if (!monthMap.has(monthKey)) {
      monthMap.set(monthKey, {
        month: monthLabel,
        monthId: monthKey,
        releases: [],
      });
    }

    monthMap.get(monthKey).releases.push(entry);
  }

  // Sort months newest first
  return Array.from(monthMap.values())
    .sort((a, b) => b.monthId.localeCompare(a.monthId));
}

/**
 * Format CHANGELOG_DATA as JS source string.
 */
function formatChangelogData(months) {
  const monthStrs = months.map(month => {
    const releaseStrs = month.releases.map(release => {
      const featureStrs = release.features.map(f =>
        `          { title: ${JSON.stringify(f.title)}, tag: ${JSON.stringify(f.tag)}, summary: ${JSON.stringify(f.summary)}, detail: ${JSON.stringify(f.detail)} }`
      ).join(',\n');

      return `      {\n        version: ${JSON.stringify(release.version)},\n        date: ${JSON.stringify(release.date)},\n        features: [\n${featureStrs}\n        ]\n      }`;
    }).join(',\n');

    return `  {\n    month: ${JSON.stringify(month.month)},\n    monthId: ${JSON.stringify(month.monthId)},\n    releases: [\n${releaseStrs}\n    ]\n  }`;
  }).join(',\n');

  return `[\n${monthStrs}\n]`;
}

function updateIndexHtml(months) {
  const html = readFileSync(INDEX_HTML, 'utf-8');
  const dataRegex = /const CHANGELOG_DATA\s*=\s*\[[\s\S]*?\];/;

  const newArray = formatChangelogData(months);
  const newHtml = html.replace(dataRegex, `const CHANGELOG_DATA = ${newArray};`);

  if (newHtml === html) {
    console.log('No CHANGELOG_DATA found in index.html, or content unchanged.');
    return false;
  }

  writeFileSync(INDEX_HTML, newHtml, 'utf-8');
  return true;
}

async function main() {
  console.log(`Syncing releases from ${REPO}...\n`);

  try {
    const releases = await fetchReleases();
    console.log(`Found ${releases.length} releases.\n`);

    const published = releases.filter(r => !r.draft && !r.prerelease);
    console.log(`${published.length} published releases.\n`);

    const entries = published
      .map(releaseToChangelogEntry)
      .filter(e => e.features.length > 0)
      .sort((a, b) => b.version.localeCompare(a.version));

    console.log(`${entries.length} releases with parseable features:\n`);
    for (const e of entries) {
      console.log(`  ${e.version} (${e.date}) — ${e.features.length} features`);
    }

    if (entries.length === 0) {
      console.log('No releases with parseable features found. index.html not modified.');
      process.exit(0);
    }

    const months = groupByMonth(entries);
    console.log(`\nGrouped into ${months.length} months:\n`);
    for (const m of months) {
      console.log(`  ${m.month}: ${m.releases.length} releases`);
    }

    const changed = updateIndexHtml(months);
    if (changed) {
      console.log('\nindex.html updated successfully.');
    } else {
      console.log('\nNo changes needed.');
    }
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

main();
