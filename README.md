# OpenClaw Changelog

<p align="center">
  <img src="https://img.shields.io/badge/OpenClaw-101010?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHJ4PSIxMCIgZmlsbD0idXJsKCNncmFkKSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPjxzdG9wIHN0b3AtY29sb3I9IiM2YzVjZTciLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNhNzhiZmEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48dGV4dCB4PSI1MCUiIHk9IjU1JSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSI3MDAiIGZyZW5jaC1sZXR0ZXItc3BhY2luZz0iLTFweCI+T0M8L3RleHQ+PC9zdmc+" alt="OC">
  <a href="https://github.com/alloevil/openclaw-changelog/releases"><img src="https://img.shields.io/github/v/release/alloevil/openclaw-changelog?include_prereleases&style=for-the-badge" alt="GitHub release"></a>
  <a href="https://alloevil.github.io/openclaw-changelog/"><img src="https://img.shields.io/badge/Changelog-在线访问-blue?style=for-the-badge&logo=github&logoColor=white" alt="Changelog"></a>
</p>

**OpenClaw Changelog** 是 [OpenClaw](https://github.com/openclaw/openclaw) 的中文版更新日志，自动从 GitHub Releases 同步，按月归档展示。

> OpenClaw 是一个运行在你自己设备上的个人 AI 助手，支持 WhatsApp、Telegram、Slack、Discord、微信等 20+ 渠道。

## 在线访问

**https://alloevil.github.io/openclaw-changelog/**

## 功能

- 从 OpenClaw GitHub Releases 自动同步
- 按月归档展示，结构清晰
- 英文 release body 翻译为中文 changelog
- GitHub Pages 自动部署
- 支持 Claude Code skill 一键同步

## 如何更新

### 方式一：Claude Code skill（推荐）

在本项目目录下使用 Claude Code，说 "同步 openchangelog"，skill 会自动完成拉取、翻译、更新和部署。

### 方式二：GitHub Actions

打开 [Actions](https://github.com/alloevil/openclaw-changelog/actions) 页面 → **Sync Changelog** → **Run workflow**

### 方式三：手动更新

编辑 `index.html` 中的 `CHANGELOG_DATA` 数组，push 后自动部署。

## 项目结构

```
openclaw-changelog/
├── index.html                  # Changelog 页面（静态 HTML + CSS + JS）
├── README.md                   # 本文件
├── skills/
│   └── sync-openlaw/
│       └── SKILL.md            # Claude Code 同步 skill
├── scripts/
│   └── sync.mjs                # 自动同步脚本（从 GitHub Releases 拉取数据）
└── .github/
    └── workflows/
        ├── sync.yml            # 手动触发同步（半自动模式）
        └── deploy.yml          # 自动部署 GitHub Pages
```

## 工作原理

```
OpenClaw Releases (GitHub)  →  sync / Claude Code skill  →  index.html  →  GitHub Pages
         英文                          翻译为中文              更新数据        自动部署
```

## 技术栈

- **前端**：纯 HTML + CSS + JS，无需构建工具
- **同步**：Node.js 脚本（ESM）+ GitHub API
- **部署**：GitHub Actions + GitHub Pages
- **翻译**：Claude Code skill（AI 翻译）

## License

MIT
