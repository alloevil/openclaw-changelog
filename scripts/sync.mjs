#!/usr/bin/env node

/**
 * sync.mjs
 * --------
 * Syncs OpenClaw GitHub Releases into index.html's CHANGELOG_DATA.
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

// Tag mapping: keywords in release body → our tag categories
const TAG_KEYWORDS = {
  '新功能':  ['feat', 'feature', '新功能', 'new'],
  '优化':    ['opt', 'perf', '优化', 'improve', '优化'],
  '修复':    ['fix', 'bug', '修复', 'patch'],
  'Breaking':['break', 'breaking', 'Breaking', '破坏性'],
};

function detectTag(text) {
  const lower = text.toLowerCase();
  for (const [tag, keywords] of Object.entries(TAG_KEYWORDS)) {
    for (const kw of keywords) {
      if (lower.includes(kw.toLowerCase())) {
        return tag;
      }
    }
  }
  return '新功能'; // default
}

/**
 * Parse release body markdown into features array.
 *
 * Supports common formats:
 * 1. Bullet list with bold titles:  - **Title**: detail text
 * 2. Bullet list with headings:     - ### Title
 *                                     detail text
 * 3. Plain bullet list:             - feature description
 */
function parseFeatures(body) {
  if (!body) return [];

  const features = [];
  const lines = body.split('\n');
  let current = null;

  for (const line of lines) {
    const trimmed = line.trim();

    // Skip empty lines and markdown headers that aren't feature items
    if (!trimmed || trimmed.startsWith('<!--')) continue;

    // Match: - **Title**: detail
    const boldMatch = trimmed.match(/^[-*]\s+\*\*(.+?)\*\*\s*[:：]\s*(.*)$/);
    if (boldMatch) {
      current = {
        title: boldMatch[1].trim(),
        tag: detectTag(boldMatch[1]),
        summary: boldMatch[2].trim().slice(0, 60),
        detail: boldMatch[2].trim(),
      };
      features.push(current);
      continue;
    }

    // Match: - **Title**
    const boldOnlyMatch = trimmed.match(/^[-*]\s+\*\*(.+?)\*\*\s*$/);
    if (boldOnlyMatch) {
      current = {
        title: boldOnlyMatch[1].trim(),
        tag: detectTag(boldOnlyMatch[1]),
        summary: '',
        detail: '',
      };
      features.push(current);
      continue;
    }

    // Match: - plain text
    const plainMatch = trimmed.match(/^[-*]\s+(.+)$/);
    if (plainMatch) {
      const text = plainMatch[1].trim();
      // Use first 20 chars as title, rest as detail
      const titleEnd = text.indexOf('，') !== -1 ? text.indexOf('，') : text.indexOf(',');
      const sep = titleEnd > 0 && titleEnd < 30 ? titleEnd : Math.min(20, text.length);
      current = {
        title: text.slice(0, sep).replace(/[，,。.：:]$/, ''),
        tag: detectTag(text),
        summary: text.slice(0, 60),
        detail: text,
      };
      features.push(current);
      continue;
    }

    // Continuation line for current feature (indented or plain text after a bullet)
    if (current && !trimmed.startsWith('#') && !trimmed.match(/^[-*]/)) {
      current.detail += (current.detail ? '\n' : '') + trimmed;
      if (!current.summary) {
        current.summary = trimmed.slice(0, 60);
      }
    }
  }

  // Clean up: ensure summary is set
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
  // Version: prefer tag_name, fallback to name
  let version = release.tag_name || release.name || '';
  if (!version.startsWith('v')) {
    version = 'v' + version;
  }

  // Date: from published_at
  const date = release.published_at
    ? release.published_at.split('T')[0]
    : release.created_at?.split('T')[0] || '';

  // Features from body
  const features = parseFeatures(release.body);

  return { version, date, features };
}

function updateIndexHtml(entries) {
  const html = readFileSync(INDEX_HTML, 'utf-8');

  // Find and replace the CHANGELOG_DATA array
  const dataRegex = /const CHANGELOG_DATA\s*=\s*\[[\s\S]*?\];/;
  const newDataStr = `const CHANGELOG_DATA = ${JSON.stringify(entries, null, 2).replace(/"(\w)":/g, '$1:')};`;

  // Actually, we need to preserve the original format better.
  // JSON.stringify won't preserve the exact formatting we want.
  // Let's build the array string manually.

  const formattedEntries = entries.map(entry => {
    const featuresStr = entry.features.map(f =>
      `      {\n        title: ${JSON.stringify(f.title)},\n        tag: ${JSON.stringify(f.tag)},\n        summary: ${JSON.stringify(f.summary)},\n        detail: ${JSON.stringify(f.detail)}\n      }`
    ).join(',\n');

    return `  {\n    version: ${JSON.stringify(entry.version)},\n    date: ${JSON.stringify(entry.date)},\n    features: [\n${featuresStr}\n    ]\n  }`;
  }).join(',\n');

  const newArray = `[\n${formattedEntries}\n]`;
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

    // Filter out drafts and prereleases (optional)
    const published = releases.filter(r => !r.draft && !r.prerelease);
    console.log(`${published.length} published releases.\n`);

    // Convert to changelog entries
    const entries = published
      .map(releaseToChangelogEntry)
      .filter(e => e.features.length > 0) // skip releases with no parseable features
      .sort((a, b) => b.version.localeCompare(a.version)); // newest first

    console.log(`${entries.length} releases with parseable features:\n`);
    for (const e of entries) {
      console.log(`  ${e.version} (${e.date}) — ${e.features.length} features`);
      for (const f of e.features) {
        console.log(`    [${f.tag}] ${f.title}: ${f.summary}`);
      }
      console.log();
    }

    if (entries.length === 0) {
      console.log('No releases with parseable features found. index.html not modified.');
      process.exit(0);
    }

    const changed = updateIndexHtml(entries);
    if (changed) {
      console.log('index.html updated successfully.');
    } else {
      console.log('No changes needed.');
    }
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

main();
