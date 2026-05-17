const RELEASES_DATA = [
  {
    "label": "2026年05月",
    "id": "2026-05",
    "releases": [
      {
        "version": "v2026.5.16",
        "name": "Hermes Agent v0.14.0 (2026.5.16) — The Foundation Release",
        "date": "2026-05-16",
        "url": "https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.16",
        "features": [
          {
            "title": "xAI Grok via SuperGrok OAuth + 1M 上下文窗口",
            "tag": "新功能",
            "summary": "SuperGrok 订阅用户 OAuth 登录即可使用 Grok，grok-4.3 上下文窗口提升至 100 万 token",
            "detail": "If you pay for SuperGrok, you can now use Grok inside Hermes by signing in with your xAI account — no API key, no separate billing. The wire-through also bumps grok-4.3 to a 1M token context window.",
            "summaryZh": "SuperGrok 用户 OAuth 登录使用 Grok，grok-4.3 上下文提升至 100 万 token"
          },
          {
            "title": "OpenAI 兼容本地代理",
            "tag": "新功能",
            "summary": "hermes proxy 启动本地 OpenAI API 兼容端点，Claude Pro/ChatGPT Pro/SuperGrok 订阅可直接被 Codex/Aider/Cline 等工具调用",
            "detail": "Run hermes proxy and you get a localhost endpoint that speaks the OpenAI API but is backed by whichever OAuth provider you're signed into. One subscription, every tool.",
            "summaryZh": "hermes proxy 启动本地 OpenAI 兼容端点，一个订阅驱动所有工具"
          },
          {
            "title": "x_search — X (Twitter) 一等公民搜索工具",
            "tag": "新功能",
            "summary": "内置 X 搜索工具，支持 OAuth 或 API Key 认证，无需安装 skill 即可搜索推文和话题",
            "detail": "The agent can now search X directly without installing a skill. Search the timeline, find threads, surface specific posts. Auth with either your X OAuth login or an API key.",
            "summaryZh": "内置 X 搜索工具，支持 OAuth/API Key，无需额外 skill"
          },
          {
            "title": "Microsoft Teams 端到端集成",
            "tag": "新功能",
            "summary": "Teams 全栈接入：Graph 认证 + Webhook 监听 + Pipeline 运行时 + 出站消息，支持频道/DM/群组",
            "detail": "The full Microsoft Graph stack lands together: auth + client foundation, a webhook listener, a pipeline plugin runtime, and outbound delivery. Chat from any Teams channel, DM, or group.",
            "summaryZh": "Teams 全栈接入：Graph 认证 + Webhook + Pipeline + 出站消息"
          },
          {
            "title": "安装瘦身浪潮",
            "tag": "优化",
            "summary": "重量级后端（Slack/Matrix/飞书/钉钉/图像生成/TTS 等）改为按需懒加载，pip install 一步到位",
            "detail": "Heavyweight backends now lazy-install on first use. The [all] extras drop everything covered by lazy-deps, a tiered install falls back when a wheel rejects on your platform, and a supply-chain advisory checker scans every install.",
            "summaryZh": "重量级后端改为按需懒加载，pip install 更轻更快"
          },
          {
            "title": "跨会话 1 小时 Claude 提示缓存",
            "tag": "优化",
            "summary": "Claude 提示前缀缓存 1 小时跨会话复用，新会话首次响应更快更便宜",
            "detail": "The prompt prefix (system prompt, skills, memory) now caches for an hour across sessions. Start a /new session and the first response comes back faster and cheaper because the cache is still warm.",
            "summaryZh": "Claude 提示前缀缓存 1 小时跨会话复用，首次响应更快更省"
          },
          {
            "title": "浏览器 CDP 调用提速 180 倍",
            "tag": "优化",
            "summary": "浏览器工具复用持久 Chrome 连接，页面检查和 JS 执行从秒级降至毫秒级",
            "detail": "Browser CDP calls share one persistent connection to Chrome instead of spinning up a new DevTools session every time. Things that used to take seconds return in milliseconds.",
            "summaryZh": "浏览器 CDP 复用持久连接，调用从秒级降至毫秒级"
          },
          {
            "title": "冷启动优化 — 启动快约 19 秒",
            "tag": "优化",
            "summary": "启动路径大幅延迟加载，hermes tools 全平台屏幕从 14 秒降至 1.5 秒以内",
            "detail": "Heavy adapters only load when you use them, model catalogs from disk cache first, doctor checks run in parallel, and chat -q skips the welcome banner entirely. hermes tools All-Platforms screen dropped from 14s to under 1.5s.",
            "summaryZh": "启动路径延迟加载，hermes tools 全平台从 14 秒降至 1.5 秒"
          },
          {
            "title": "2 个新消息平台 — LINE + SimpleX Chat",
            "tag": "新功能",
            "summary": "LINE（日韩台主流）和 SimpleX Chat（去中心化隐私通讯）接入，消息平台总数达 22 个",
            "detail": "LINE is huge in Japan, Korea, and Taiwan, and now Hermes runs natively on the LINE Messaging API. SimpleX Chat is the privacy-focused decentralized messenger with no user IDs. 22 platforms total.",
            "summaryZh": "LINE + SimpleX Chat 接入，消息平台总数达 22 个"
          },
          {
            "title": "/handoff 实时会话转移",
            "tag": "新功能",
            "summary": "切换模型或人格时实时迁移完整会话上下文，不再丢失对话历史",
            "detail": "/handoff moves your active session — every message, every tool call, every piece of context — to the target model, persona, or profile, live, without dropping anything.",
            "summaryZh": "/handoff 实时迁移完整会话上下文，切换模型不丢失历史"
          },
          {
            "title": "clarify 原生按钮 UI",
            "tag": "优化",
            "summary": "Telegram 和 Discord 上 clarify 多选问题显示原生按钮，点击即答，移动端体验大幅提升",
            "detail": "When the agent uses the clarify tool to ask a multiple-choice question, it now shows real platform-native buttons on Telegram and Discord instead of asking you to type back the option number.",
            "summaryZh": "Telegram/Discord clarify 显示原生按钮，点击即答"
          },
          {
            "title": "LSP 语义诊断 + 视频生成 + computer_use CUA",
            "tag": "新功能",
            "summary": "每次写入自动 LSP 语义检查；统一可插拔 video_generate；computer_use 支持非 Anthropic provider",
            "detail": "LSP semantic diagnostics on every write, a unified pluggable video_generate, a computer_use cua-driver backend that finally works with non-Anthropic providers.",
            "summaryZh": "写入自动 LSP 诊断；统一 video_generate；computer_use 支持非 Anthropic provider"
          }
        ]
      },
      {
        "version": "v2026.5.7",
        "name": "Hermes Agent v0.13.0 (2026.5.7) — The Tenacity Release",
        "date": "2026-05-07",
        "url": "https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.7",
        "features": [
          {
            "title": "Multi-agent Kanban — delegate to an AI team that actually finishes",
            "tag": "修复",
            "summary": "多代理看板：持久化协作面板，支持心跳检测、僵尸回收、幻觉拦截与自动重试",
            "detail": "Spin up a durable board, drop tasks on it, and let multiple Hermes workers pick them up, hand off, and close them out. Heartbeats, reclaim, zombie detection, retry budgets, and a hallucination gate keep the team honest. One install, many kanbans. (#17805, #19653, #20232, #20332, #21330, #21183, #212",
            "summaryZh": "多代理看板：持久化协作面板，支持心跳检测、僵尸回收、幻觉拦截与自动重试"
          },
          {
            "title": "`/goal` — the agent doesn't forget what you asked it to do",
            "tag": "新功能",
            "summary": "/goal 命令：锁定目标后跨轮次保持任务聚焦，Ralph 循环作为一等原语",
            "detail": "Lock the agent onto a target and it stays on task across turns. The Ralph loop as a first-class primitive. (#18262, #18275, #21287)",
            "summaryZh": "/goal 命令：锁定目标后跨轮次保持任务聚焦，Ralph 循环作为一等原语"
          },
          {
            "title": "Show it a video",
            "tag": "新功能",
            "summary": "视频分析工具：支持 Gemini 等多模态模型的原生视频理解",
            "detail": "new `video_analyze` tool for native video understanding on Gemini and compatible multimodal models. (@alt-glitch) (#19301)",
            "summaryZh": "视频分析工具：支持 Gemini 等多模态模型的原生视频理解"
          },
          {
            "title": "Clone a voice",
            "tag": "新功能",
            "summary": "语音克隆：xAI Custom Voices 作为 TTS provider，支持声音克隆",
            "detail": "xAI Custom Voices lands as a TTS provider with voice cloning support. (@alt-glitch) (#18776)",
            "summaryZh": "语音克隆：xAI Custom Voices 作为 TTS provider，支持声音克隆"
          },
          {
            "title": "Hermes speaks your language",
            "tag": "优化",
            "summary": "国际化：静态消息与 CLI 翻译为中日德西法乌土 7 种语言",
            "detail": "static gateway + CLI messages translate to 7 locales: Chinese, Japanese, German, Spanish, French, Ukrainian, and Turkish. Docs site gains a Chinese (zh-Hans) locale. (#20231, #20329, #20467, #20474, #20430, #20431)",
            "summaryZh": "国际化：静态消息与 CLI 翻译为中日德西法乌土 7 种语言"
          },
          {
            "title": "Google Chat — the 20th messaging platform",
            "tag": "修复",
            "summary": "Google Chat 成为第 20 个消息平台，附带通用 platform-plugin hook 接口",
            "detail": "plus a generic platform-plugin hooks surface so third-party adapters drop in without touching core (IRC and Teams migrated). (#21306, #21331)",
            "summaryZh": "Google Chat 成为第 20 个消息平台，附带通用 platform-plugin hook 接口"
          },
          {
            "title": "Sessions survive restarts",
            "tag": "优化",
            "summary": "网关重启后会话自动恢复，支持 /update 重启与源文件热加载",
            "detail": "gateway bounces mid-agent, `/update` restarts, source-file reloads — conversations auto-resume when the gateway comes back. (#21192)",
            "summaryZh": "网关重启后会话自动恢复，支持 /update 重启与源文件热加载"
          },
          {
            "title": "Security wave — 8 P0 closures",
            "tag": "安全",
            "summary": "安全加固：8 个 P0 修复，脱敏默认开启，Discord 角色白名单限定 guild 作用域",
            "detail": "redaction ON by default, Discord role-allowlists guild-scoped (CVSS 8.1 cross-guild DM bypass closed), WhatsApp rejects strangers by default, TOCTOU windows closed across `auth.json` and MCP OAuth, browser enforces cloud-metadata SSRF floor, cron prompt-injection scans assembled skill content, `herm",
            "summaryZh": "安全加固：8 个 P0 修复，脱敏默认开启，Discord 角色白名单限定 guild 作用域"
          },
          {
            "title": "Checkpoints v2",
            "tag": "优化",
            "summary": "Checkpoints v2：状态持久化重写，真实裁剪，磁盘保护，无孤儿影子仓库",
            "detail": "state persistence rewritten. Real pruning, disk guardrails, no more orphan shadow repos. (#20709)",
            "summaryZh": "Checkpoints v2：状态持久化重写，真实裁剪，磁盘保护，无孤儿影子仓库"
          },
          {
            "title": "The agent lints its own writes",
            "tag": "修复",
            "summary": "写后 lint：write_file 和 patch 后自动检查 Python/JSON/YAML/TOML 语法",
            "detail": "post-write delta lint on `write_file` + `patch`. Python, JSON, YAML, TOML. Syntax errors surface immediately instead of shipping downstream. (#20191)",
            "summaryZh": "写后 lint：write_file 和 patch 后自动检查 Python/JSON/YAML/TOML 语法"
          },
          {
            "title": "`no_agent` cron mode — script-only watchdog",
            "tag": "优化",
            "summary": "no_agent cron 模式：纯脚本看门狗，跳过 agent，空输出静默",
            "detail": "cron jobs can now skip the agent entirely and just run a script. Empty stdout is silent, non-empty gets delivered verbatim. (#19709)",
            "summaryZh": "no_agent cron 模式：纯脚本看门狗，跳过 agent，空输出静默"
          },
          {
            "title": "Platform allowlists everywhere",
            "tag": "安全",
            "summary": "平台白名单：Slack/Telegram/Mattermost/Matrix/DingTalk 支持 allowed_channels 配置",
            "detail": "`allowed_channels` / `allowed_chats` / `allowed_rooms` config across Slack, Telegram, Mattermost, Matrix, and DingTalk. (#21251)",
            "summaryZh": "平台白名单：Slack/Telegram/Mattermost/Matrix/DingTalk 支持 allowed_channels 配置"
          },
          {
            "title": "Providers are now plugins",
            "tag": "修复",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "`ProviderProfile` ABC + `plugins/model-providers/`. Drop in third-party providers without touching core. (#20324)",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "API server — long-term memory per session",
            "tag": "优化",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "`X-Hermes-Session-Key` header gives memory providers a stable session identifier. (#20199)",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "MCP levels up",
            "tag": "安全",
            "summary": "MCP 增强：SSE 传输 + OAuth 转发、过期管道重试、图片结果以 MEDIA tag 呈现",
            "detail": "SSE transport with OAuth forwarding, stale-pipe retries, image results surface as MEDIA tags instead of getting dropped, keepalive on long-lived lifecycle waits. (#21227, #21323, #21289, #21328, #20209)",
            "summaryZh": "MCP 增强：SSE 传输 + OAuth 转发、过期管道重试、图片结果以 MEDIA tag 呈现"
          },
          {
            "title": "Curator grows subcommands",
            "tag": "新功能",
            "summary": "Curator 子命令：archive/prune/list-archived，手动 run 同步执行",
            "detail": "`hermes curator archive`, `prune`, `list-archived`. Manual `hermes curator run` is synchronous now — you see results without polling. (#20200, #21236, #21216)",
            "summaryZh": "Curator 子命令：archive/prune/list-archived，手动 run 同步执行"
          },
          {
            "title": "ACP — `/steer` and `/queue`",
            "tag": "优化",
            "summary": "网关重启后会话自动恢复，支持 /update 重启与源文件热加载",
            "detail": "direct the in-flight agent or queue follow-ups from Zed, VS Code, or JetBrains. Plus atomic session persistence and reasoning-metadata preservation across restarts. (@HenkDz) (#18114, #20279, #20296, #20433)",
            "summaryZh": "网关重启后会话自动恢复，支持 /update 重启与源文件热加载"
          },
          {
            "title": "TUI glow-up",
            "tag": "安全",
            "summary": "TUI 升级：/model 选择器、可折叠启动横幅、状态栏上下文压缩计数",
            "detail": "`/model` picker matches `hermes model` with inline auth (@austinpickett), collapsible startup banner sections (@kshitijk4poor), context-compression counter in the status bar. (#18117, #20625, #21218)",
            "summaryZh": "TUI 升级：/model 选择器、可折叠启动横幅、状态栏上下文压缩计数"
          },
          {
            "title": "Dashboard grows up",
            "tag": "安全",
            "summary": "Dashboard 增强：插件管理页、Profile 页、可排序分析表、反向代理支持",
            "detail": "Plugins page (manage, enable/disable, auth status) (@austinpickett), Profiles management page (@vincez-hms-coder), sortable analytics tables, reverse-proxy support via `X-Forwarded-Prefix`, new `default-large` 18px theme. (#18095, #16419, #18192, #21296, #20820)",
            "summaryZh": "Dashboard 增强：插件管理页、Profile 页、可排序分析表、反向代理支持"
          },
          {
            "title": "SearXNG + split web tools",
            "tag": "新功能",
            "summary": "SearXNG 原生搜索后端 + web 工具拆分（search/extract/browse 各自独立后端）",
            "detail": "SearXNG ships as a native search-only backend; web tools now let you pick different backends per capability (search vs extract vs browse). (@kshitijk4poor) (#20823, #20061, #20841)",
            "summaryZh": "SearXNG 原生搜索后端 + web 工具拆分（search/extract/browse 各自独立后端）"
          },
          {
            "title": "OpenRouter response caching",
            "tag": "优化",
            "summary": "OpenRouter 响应缓存：显式 cache control",
            "detail": "explicit cache control for models that expose it. (@kshitijk4poor) (#19132)",
            "summaryZh": "OpenRouter 响应缓存：显式 cache control"
          },
          {
            "title": "`[[as_document]]` — skill media-routing directive",
            "tag": "新功能",
            "summary": "[[as_document]] 技能指令：强制网关以文件形式投递输出",
            "detail": "skills can force the gateway to deliver output as a document on platforms that support it. (#21210)",
            "summaryZh": "[[as_document]] 技能指令：强制网关以文件形式投递输出"
          },
          {
            "title": "`transform_llm_output` plugin hook",
            "tag": "新功能",
            "summary": "transform_llm_output 插件 hook：LLM 输出到达对话前可由插件重塑或过滤",
            "detail": "new lifecycle hook that lets plugins reshape or filter LLM output before it hits the conversation. Useful for context-window reducers and content filters. (#21235)",
            "summaryZh": "transform_llm_output 插件 hook：LLM 输出到达对话前可由插件重塑或过滤"
          },
          {
            "title": "Nous OAuth persists across profiles",
            "tag": "安全",
            "summary": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识",
            "detail": "shared token store: sign in once, every profile inherits the session. (#19712)",
            "summaryZh": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识"
          },
          {
            "title": "QQBot — native approval keyboards",
            "tag": "新功能",
            "summary": "QQBot 原生审批键盘 + 分块上传 + 引用附件",
            "detail": "feature parity with Telegram / Discord approval UX. Chunked upload, quoted attachments. (#21342, #21353)",
            "summaryZh": "QQBot 原生审批键盘 + 分块上传 + 引用附件"
          },
          {
            "title": "6 new optional skills",
            "tag": "新功能",
            "summary": "视频分析工具：支持 Gemini 等多模态模型的原生视频理解",
            "detail": "Shopify (Admin + Storefront GraphQL), here.now, shop-app personal shopping assistant, Anthropic financial-services bundle, kanban-video-orchestrator (@SHL0MS), searxng-search (@kshitijk4poor). (#18116, #18170, #20702, #21180, #19281, #20841)",
            "summaryZh": "视频分析工具：支持 Gemini 等多模态模型的原生视频理解"
          },
          {
            "title": "New models",
            "tag": "新功能",
            "summary": "OpenRouter 响应缓存：显式 cache control",
            "detail": "`deepseek/deepseek-v4-pro`, `x-ai/grok-4.3`, `openrouter/owl-alpha` (free), `tencent/hy3-preview` (@Contentment003111), Arcee Trinity Large Thinking temperature + compression overrides. (#20495, #20497, #18071, #21077, #20473)",
            "summaryZh": "OpenRouter 响应缓存：显式 cache control"
          },
          {
            "title": "100 fresh CLI startup tips",
            "tag": "新功能",
            "summary": "Curator 子命令：archive/prune/list-archived，手动 run 同步执行",
            "detail": "the random tip banner gets 100 new entries covering cron, kanban, curator, plugins, and lesser-known flags. (#20168) ---",
            "summaryZh": "Curator 子命令：archive/prune/list-archived，手动 run 同步执行"
          }
        ]
      }
    ]
  },
  {
    "label": "2026年04月",
    "id": "2026-04",
    "releases": [
      {
        "version": "v2026.4.30",
        "name": "Hermes Agent v0.12.0 (2026.4.30)",
        "date": "2026-04-30",
        "url": "https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.30",
        "features": [
          {
            "title": "Autonomous Curator",
            "tag": "优化",
            "summary": "Curator 子命令：archive/prune/list-archived，手动 run 同步执行",
            "detail": "`hermes curator` runs as a background agent on the gateway's cron ticker (7-day cycle default). It grades your skill library, consolidates related skills, prunes dead ones, and writes per-run reports to `logs/curator/run.json` + `REPORT.md`. Archived skills are classified consolidated-vs-pruned via ",
            "summaryZh": "Curator 子命令：archive/prune/list-archived，手动 run 同步执行"
          },
          {
            "title": "Self-improvement loop — substantially upgraded",
            "tag": "新功能",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "The background review fork (the core of Hermes' self-improvement: after each turn it decides what memories/skills to save or update) is now class-first (rubric-based rather than free-form), active-update biased (prefers the skill the agent just loaded), handles `references/`/`templates/` sub-files, ",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "Skill integrations — major expansion",
            "tag": "新功能",
            "summary": "MCP 增强：SSE 传输 + OAuth 转发、过期管道重试、图片结果以 MEDIA tag 呈现",
            "detail": "**ComfyUI v5** with official CLI + REST + hardware-gated local install, moved from optional to **built-in by default** (#17610, #17631, #17734). **TouchDesigner-MCP** bundled by default, expanded with GLSL, post-FX, audio, geometry, and 9 new reference docs (#16753, #16624, #16768 — @kshitijk4poor +",
            "summaryZh": "MCP 增强：SSE 传输 + OAuth 转发、过期管道重试、图片结果以 MEDIA tag 呈现"
          },
          {
            "title": "LM Studio — first-class provider",
            "tag": "安全",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "upgraded from a custom-endpoint alias to a full-blown native provider: dedicated auth, `hermes doctor` checks, reasoning transport, live `/models` listing. (Salvage of @kshitijk4poor's #17061.) (#17102)",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "Four more new inference providers",
            "tag": "安全",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "**GMI Cloud** (first-class, salvage of #11955 — @isaachuangGMICLOUD), **Azure AI Foundry** with auto-detection, **MiniMax OAuth** with PKCE browser flow (salvage #15203), **Tencent Tokenhub** (salvage of #16860). (#16663, #15845, #17524, #16960)",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "Pluggable gateway platforms + Microsoft Teams",
            "tag": "修复",
            "summary": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心",
            "detail": "the gateway is now a plugin host. Drop-in messaging adapters live outside the core, and Microsoft Teams is the first plugin-shipped platform. (Salvage of #17664.) (#17751, #17828)",
            "summaryZh": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心"
          },
          {
            "title": "Tencent 元宝 (Yuanbao) — 18th messaging platform",
            "tag": "优化",
            "summary": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心",
            "detail": "native gateway adapter with text + media delivery. (#16298, #17424)",
            "summaryZh": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心"
          },
          {
            "title": "Spotify — native tools + bundled skill + wizard",
            "tag": "安全",
            "summary": "新增可选技能：Shopify、here.now、shop-app、Anthropic 金融、kanban-video、searxng-search",
            "detail": "7 tools (play, search, queue, playlists, devices) behind PKCE OAuth, interactive setup wizard, bundled skill, surfacing in `hermes tools`, cron usage documented. (#15121, #15130, #15154, #15180)",
            "summaryZh": "新增可选技能：Shopify、here.now、shop-app、Anthropic 金融、kanban-video、searxng-search"
          },
          {
            "title": "Google Meet plugin",
            "tag": "优化",
            "summary": "Provider 插件化架构：第三方 provider 可通过插件目录接入，不改核心代码",
            "detail": "join calls, transcribe, speak, follow up. Realtime OpenAI transport + Node bot server, full pipeline bundled as a plugin. (#16364)",
            "summaryZh": "Provider 插件化架构：第三方 provider 可通过插件目录接入，不改核心代码"
          },
          {
            "title": "`hermes -z` one-shot mode + `hermes update --check`",
            "tag": "优化",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "non-interactive `hermes -z <prompt>` with `--model`/`--provider`/`HERMES_INFERENCE_MODEL`. `hermes update --check` preflight. Opt-in pre-update HERMES_HOME backup. (#15702, #15704, #15841, #16539, #16566)",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "Models dashboard tab + in-browser model config",
            "tag": "优化",
            "summary": "Dashboard 增强：插件管理页、Profile 页、可排序分析表、反向代理支持",
            "detail": "rich per-model analytics, switch main + auxiliary models from the dashboard. (#17745, #17802)",
            "summaryZh": "Dashboard 增强：插件管理页、Profile 页、可排序分析表、反向代理支持"
          },
          {
            "title": "Remote model catalog manifest",
            "tag": "新功能",
            "summary": "OpenRouter 响应缓存：显式 cache control",
            "detail": "OpenRouter + Nous Portal model catalogs are now pulled from a remote manifest so new models show up without a release. (#16033)",
            "summaryZh": "OpenRouter 响应缓存：显式 cache control"
          },
          {
            "title": "Native multimodal image routing",
            "tag": "优化",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "images now route based on the model's actual vision capability rather than provider defaults. (#16506)",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "Gateway media parity",
            "tag": "新功能",
            "summary": "native multi-image sending across Telegram, Discord, Slack, Mattermost, Email, and Signal; centralized audio routing wit",
            "detail": "native multi-image sending across Telegram, Discord, Slack, Mattermost, Email, and Signal; centralized audio routing with FLAC support + Telegram document fallback. (#17909, #17833)",
            "summaryZh": null
          },
          {
            "title": "TUI catches up to (and past) the classic CLI",
            "tag": "优化",
            "summary": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识",
            "detail": "LaTeX rendering (@austinpickett), `/reload` .env hot-reload, pluggable busy-indicator styles (@OutThisLife, #13610), opt-in auto-resume of last session, expanded light-terminal auto-detection, session delete from `/resume` picker with `d`, modified mouse-wheel line scroll, and a `/mouse` toggle that",
            "summaryZh": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识"
          },
          {
            "title": "Observability + achievements plugins",
            "tag": "优化",
            "summary": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识",
            "detail": "bundled Langfuse observability plugin (salvage #16845) + bundled hermes-achievements plugin that scans full session history. (#16917, #17754)",
            "summaryZh": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识"
          },
          {
            "title": "TTS provider registry + Piper local TTS",
            "tag": "修复",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "pluggable `tts.providers.<name>` registry; Piper ships as a native local TTS provider. (Closes #8508.) (#17843, #17885)",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "Vercel Sandbox backend",
            "tag": "优化",
            "summary": "Vercel sandboxes as an execute_code/terminal backend (@kshitijk4poor). (#17445)",
            "detail": "Vercel sandboxes as an execute_code/terminal backend (@kshitijk4poor). (#17445)",
            "summaryZh": null
          },
          {
            "title": "Secret redaction off by default",
            "tag": "安全",
            "summary": "安全波：脱敏默认开启，Discord 跨 guild DM 旁路关闭，WhatsApp 默认拒绝陌生人",
            "detail": "default flipped to off. Prevents the long-standing patch-corruption incidents where fake secret-shaped substrings mangled tool outputs. Opt in via `redaction.enabled: true` when you need it. (#16794)",
            "summaryZh": "安全波：脱敏默认开启，Discord 跨 guild DM 旁路关闭，WhatsApp 默认拒绝陌生人"
          },
          {
            "title": "Cold-start performance",
            "tag": "优化",
            "summary": "TUI 升级：/model 选择器、可折叠启动横幅、状态栏上下文压缩计数",
            "detail": "visible TUI cold start cut **~57%** via lazy agent init (@OutThisLife), lazy imports of OpenAI / Anthropic / Firecrawl / account_usage, mtime-cached `load_config()`, memoized `get_tool_definitions()` with TTL-cached `check_fn` results, precompiled dangerous-command patterns. (#17190, #17046, #17041,",
            "summaryZh": "TUI 升级：/model 选择器、可折叠启动横幅、状态栏上下文压缩计数"
          },
          {
            "title": "Configurable prompt cache TTL",
            "tag": "优化",
            "summary": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识",
            "detail": "`prompt_caching.cache_ttl` (5m default, 1h opt-in — cost savings for bursty sessions that keep cache warm). Salvage of #12659. (#15065) ---",
            "summaryZh": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识"
          }
        ]
      },
      {
        "version": "v2026.4.23",
        "name": "Hermes Agent v0.11.0 (2026.4.23)",
        "date": "2026-04-23",
        "url": "https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.23",
        "features": [
          {
            "title": "New Ink-based TUI",
            "tag": "新功能",
            "summary": "TUI 升级：/model 选择器、可折叠启动横幅、状态栏上下文压缩计数",
            "detail": "`hermes --tui` is now a full React/Ink rewrite of the interactive CLI, with a Python JSON-RPC backend (`tui_gateway`). Sticky composer, live streaming with OSC-52 clipboard support, stable picker keys, status bar with per-turn stopwatch and git branch, `/clear` confirm, light-theme preset, and a sub",
            "summaryZh": "TUI 升级：/model 选择器、可折叠启动横幅、状态栏上下文压缩计数"
          },
          {
            "title": "Transport ABC + Native AWS Bedrock",
            "tag": "新功能",
            "summary": "Format conversion and HTTP transport were extracted from `run_agent.py` into a pluggable `agent/transports/` layer. `Ant",
            "detail": "Format conversion and HTTP transport were extracted from `run_agent.py` into a pluggable `agent/transports/` layer. `AnthropicTransport`, `ChatCompletionsTransport`, `ResponsesApiTransport`, and `BedrockTransport` each own their own format conversion and API shape. Native AWS Bedrock support via the",
            "summaryZh": null
          },
          {
            "title": "Five new inference paths",
            "tag": "安全",
            "summary": "Native NVIDIA NIM (#11774), Arcee AI (#9276), Step Plan (#13893), Google Gemini CLI OAuth (#11270), and Vercel ai-gatewa",
            "detail": "Native NVIDIA NIM (#11774), Arcee AI (#9276), Step Plan (#13893), Google Gemini CLI OAuth (#11270), and Vercel ai-gateway with pricing + dynamic discovery (#13223 — @jerilynzheng). Plus Gemini routed through the native AI Studio API for better performance (#12674).",
            "summaryZh": null
          },
          {
            "title": "GPT-5.5 over Codex OAuth",
            "tag": "安全",
            "summary": "新增模型：deepseek-v4-pro、grok-4.3、owl-alpha（免费）、hy3-preview",
            "detail": "OpenAI's new GPT-5.5 reasoning model is now available through your ChatGPT Codex OAuth, with live model discovery wired into the model picker so new OpenAI releases show up without catalog updates. (#14720)",
            "summaryZh": "新增模型：deepseek-v4-pro、grok-4.3、owl-alpha（免费）、hy3-preview"
          },
          {
            "title": "QQBot — 17th supported platform",
            "tag": "新功能",
            "summary": "QQBot 原生审批键盘 + 分块上传 + 引用附件",
            "detail": "Native QQBot adapter via QQ Official API v2, with QR scan-to-configure setup wizard, streaming cursor, emoji reactions, and DM/group policy gating that matches WeCom/Weixin parity. (#9364, #11831)",
            "summaryZh": "QQBot 原生审批键盘 + 分块上传 + 引用附件"
          },
          {
            "title": "Plugin surface expanded",
            "tag": "修复",
            "summary": "Dashboard 增强：插件管理页、Profile 页、可排序分析表、反向代理支持",
            "detail": "Plugins can now register slash commands (`register_command`), dispatch tools directly (`dispatch_tool`), block tool execution from hooks (`pre_tool_call` can veto), rewrite tool results (`transform_tool_result`), transform terminal output (`transform_terminal_output`), ship image_gen backends, and a",
            "summaryZh": "Dashboard 增强：插件管理页、Profile 页、可排序分析表、反向代理支持"
          },
          {
            "title": "`/steer` — mid-run agent nudges",
            "tag": "优化",
            "summary": "ACP /steer /queue：IDE 内直接引导飞行中 agent 或排队后续任务",
            "detail": "`/steer <prompt>` injects a note that the running agent sees after its next tool call, without interrupting the turn or breaking prompt cache. For when you want to course-correct an agent in-flight. (#12116)",
            "summaryZh": "ACP /steer /queue：IDE 内直接引导飞行中 agent 或排队后续任务"
          },
          {
            "title": "Shell hooks",
            "tag": "优化",
            "summary": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识",
            "detail": "Wire any shell script as a Hermes lifecycle hook (pre_tool_call, post_tool_call, on_session_start, etc.) without writing a Python plugin. (#13296)",
            "summaryZh": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识"
          },
          {
            "title": "Webhook direct-delivery mode",
            "tag": "优化",
            "summary": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心",
            "detail": "Webhook subscriptions can now forward payloads straight to a platform chat without going through the agent — zero-LLM push notifications for alerting, uptime checks, and event streams. (#12473)",
            "summaryZh": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心"
          },
          {
            "title": "Smarter delegation",
            "tag": "优化",
            "summary": "Subagents now have an explicit `orchestrator` role that can spawn their own workers, with configurable `max_spawn_depth`",
            "detail": "Subagents now have an explicit `orchestrator` role that can spawn their own workers, with configurable `max_spawn_depth` (default flat). Concurrent sibling subagents share filesystem state through a file-coordination layer so they don't clobber each other's edits. (#13691, #13718)",
            "summaryZh": null
          },
          {
            "title": "Auxiliary models — configurable UI + main-model-first",
            "tag": "新功能",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "`hermes model` has a dedicated \"Configure auxiliary models\" screen for per-task overrides (compression, vision, session_search, title_generation). `auto` routing now defaults to the main model for side tasks across all users (previously aggregator users were silently routed to a cheap provider-side ",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "Dashboard plugin system + live theme switching",
            "tag": "新功能",
            "summary": "Dashboard 增强：插件管理页、Profile 页、可排序分析表、反向代理支持",
            "detail": "The web dashboard is now extensible. Third-party plugins can add custom tabs, widgets, and views without forking. Paired with a live-switching theme system — themes now control colors, fonts, layout, and density — so users can hot-swap the dashboard look without a reload. Same theming discipline the",
            "summaryZh": "Dashboard 增强：插件管理页、Profile 页、可排序分析表、反向代理支持"
          },
          {
            "title": "Dashboard polish",
            "tag": "优化",
            "summary": "网关重启后会话自动恢复，支持 /update 重启与源文件热加载",
            "detail": "i18n (English + Chinese), react-router sidebar layout, mobile-responsive, Vercel deployment, real per-session API call tracking, and one-click update + gateway restart buttons. (#9228, #9370, #9453, #10686, #13526, #14004 — @austinpickett + @DeployFaith + Teknium) ---",
            "summaryZh": "网关重启后会话自动恢复，支持 /update 重启与源文件热加载"
          }
        ]
      },
      {
        "version": "v2026.4.16",
        "name": "Hermes Agent v0.10.0 (2026.4.16)",
        "date": "2026-04-16",
        "url": "https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.16",
        "features": [
          {
            "title": "Nous Tool Gateway",
            "tag": "优化",
            "summary": "新增模型：deepseek-v4-pro、grok-4.3、owl-alpha（免费）、hy3-preview",
            "detail": "Paid Nous Portal subscribers now get automatic access to **web search** (Firecrawl), **image generation** (FAL / FLUX 2 Pro), **text-to-speech** (OpenAI TTS), and **browser automation** (Browser Use) through their existing subscription. No separate API keys needed — just run `hermes model`, select N",
            "summaryZh": "新增模型：deepseek-v4-pro、grok-4.3、owl-alpha（免费）、hy3-preview"
          }
        ]
      },
      {
        "version": "v2026.4.13",
        "name": "Hermes Agent v0.9.0 (v2026.4.13)",
        "date": "2026-04-13",
        "url": "https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.13",
        "features": [
          {
            "title": "Local Web Dashboard",
            "tag": "新功能",
            "summary": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识",
            "detail": "A new browser-based dashboard for managing your Hermes Agent locally. Configure settings, monitor sessions, browse skills, and manage your gateway — all from a clean web interface without touching config files or the terminal. The easiest way to get started with Hermes.",
            "summaryZh": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识"
          },
          {
            "title": "Fast Mode (`/fast`)",
            "tag": "新功能",
            "summary": "新增模型：deepseek-v4-pro、grok-4.3、owl-alpha（免费）、hy3-preview",
            "detail": "Priority processing for OpenAI and Anthropic models. Toggle `/fast` to route through priority queues for significantly lower latency on supported models (GPT-5.4, Codex, Claude). Expands across all OpenAI Priority Processing models and Anthropic's fast tier. (#6875, #6960, #7037)",
            "summaryZh": "新增模型：deepseek-v4-pro、grok-4.3、owl-alpha（免费）、hy3-preview"
          },
          {
            "title": "iMessage via BlueBubbles",
            "tag": "优化",
            "summary": "transform_llm_output hook：插件可在输出到达对话前重塑/过滤 LLM 回复",
            "detail": "Full iMessage integration through BlueBubbles, bringing Hermes to Apple's messaging ecosystem. Auto-webhook registration, setup wizard integration, and crash resilience. (#6437, #6460, #6494)",
            "summaryZh": "transform_llm_output hook：插件可在输出到达对话前重塑/过滤 LLM 回复"
          },
          {
            "title": "WeChat (Weixin) & WeCom Callback Mode",
            "tag": "新功能",
            "summary": "Native WeChat support via iLink Bot API and a new WeCom callback-mode adapter for self-built enterprise apps. Streaming ",
            "detail": "Native WeChat support via iLink Bot API and a new WeCom callback-mode adapter for self-built enterprise apps. Streaming cursor, media uploads, markdown link handling, and atomic state persistence. Hermes now covers the Chinese messaging ecosystem end-to-end. (#7166, #7943)",
            "summaryZh": null
          },
          {
            "title": "Termux / Android Support",
            "tag": "新功能",
            "summary": "语音克隆：xAI Custom Voices 作为 TTS provider，支持声音克隆",
            "detail": "Run Hermes natively on Android via Termux. Adapted install paths, TUI optimizations for mobile screens, voice backend support, and the `/image` command work on-device. (#6834)",
            "summaryZh": "语音克隆：xAI Custom Voices 作为 TTS provider，支持声音克隆"
          },
          {
            "title": "Background Process Monitoring (`watch_patterns`)",
            "tag": "优化",
            "summary": "Set patterns to watch for in background process output and get notified in real-time when they match. Monitor for errors",
            "detail": "Set patterns to watch for in background process output and get notified in real-time when they match. Monitor for errors, wait for specific events (\"listening on port\"), or watch build logs — all without polling. (#7635)",
            "summaryZh": null
          },
          {
            "title": "Native xAI & Xiaomi MiMo Providers",
            "tag": "安全",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "First-class provider support for xAI (Grok) and Xiaomi MiMo, with direct API access, model catalogs, and setup wizard integration. Plus Qwen OAuth with portal request support. (#7372, #7855)",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "Pluggable Context Engine",
            "tag": "优化",
            "summary": "Provider 插件化架构：第三方 provider 可通过插件目录接入，不改核心代码",
            "detail": "Context management is now a pluggable slot via `hermes plugins`. Swap in custom context engines that control what the agent sees each turn — filtering, summarization, or domain-specific context injection. (#7464)",
            "summaryZh": "Provider 插件化架构：第三方 provider 可通过插件目录接入，不改核心代码"
          },
          {
            "title": "Unified Proxy Support",
            "tag": "新功能",
            "summary": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心",
            "detail": "SOCKS proxy, `DISCORD_PROXY`, and system proxy auto-detection across all gateway platforms. Hermes behind corporate firewalls just works. (#6814)",
            "summaryZh": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心"
          },
          {
            "title": "Comprehensive Security Hardening",
            "tag": "安全",
            "summary": "Checkpoints v2：状态持久化重写，真实裁剪，磁盘保护，无孤儿影子仓库",
            "detail": "Path traversal protection in checkpoint manager, shell injection neutralization in sandbox writes, SSRF redirect guards in Slack image uploads, Twilio webhook signature validation (SMS RCE fix), API server auth enforcement, git argument injection prevention, and approval button authorization. (#7933",
            "summaryZh": "Checkpoints v2：状态持久化重写，真实裁剪，磁盘保护，无孤儿影子仓库"
          },
          {
            "title": "`hermes backup` & `hermes import`",
            "tag": "优化",
            "summary": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识",
            "detail": "Full backup and restore of your Hermes configuration, sessions, skills, and memory. Migrate between machines or create snapshots before major changes. (#7997)",
            "summaryZh": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识"
          },
          {
            "title": "16 Supported Platforms",
            "tag": "新功能",
            "summary": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心",
            "detail": "With BlueBubbles (iMessage) and WeChat joining Telegram, Discord, Slack, WhatsApp, Signal, Matrix, Email, SMS, DingTalk, Feishu, WeCom, Mattermost, Home Assistant, and Webhooks, Hermes now runs on 16 messaging platforms out of the box.",
            "summaryZh": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心"
          },
          {
            "title": "`/debug` & `hermes debug share`",
            "tag": "修复",
            "summary": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心",
            "detail": "New debugging toolkit: `/debug` slash command across all platforms for quick diagnostics, plus `hermes debug share` to upload a full debug report to a pastebin for easy sharing when troubleshooting. (#8681) ---",
            "summaryZh": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心"
          }
        ]
      },
      {
        "version": "v2026.4.8",
        "name": "Hermes Agent v0.8.0 (v2026.4.8)",
        "date": "2026-04-08",
        "url": "https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.8",
        "features": [
          {
            "title": "Background Process Auto-Notifications (`notify_on_complete`)",
            "tag": "新功能",
            "summary": "新增模型：deepseek-v4-pro、grok-4.3、owl-alpha（免费）、hy3-preview",
            "detail": "Background tasks can now automatically notify the agent when they finish. Start a long-running process (AI model training, test suites, deployments, builds) and the agent gets notified on completion — no polling needed. The agent can keep working on other things and pick up results when they land. (",
            "summaryZh": "新增模型：deepseek-v4-pro、grok-4.3、owl-alpha（免费）、hy3-preview"
          },
          {
            "title": "Free Xiaomi MiMo v2 Pro on Nous Portal",
            "tag": "新功能",
            "summary": "新增模型：deepseek-v4-pro、grok-4.3、owl-alpha（免费）、hy3-preview",
            "detail": "Nous Portal now supports the free-tier Xiaomi MiMo v2 Pro model for auxiliary tasks (compression, vision, summarization), with free-tier model gating and pricing display in model selection. (#6018, #5880)",
            "summaryZh": "新增模型：deepseek-v4-pro、grok-4.3、owl-alpha（免费）、hy3-preview"
          },
          {
            "title": "Live Model Switching (`/model` Command)",
            "tag": "优化",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "Switch models and providers mid-session from CLI, Telegram, Discord, Slack, or any gateway platform. Aggregator-aware resolution keeps you on OpenRouter/Nous when possible, with automatic cross-provider fallback when needed. Interactive model pickers on Telegram and Discord with inline buttons. (#51",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "Self-Optimized GPT/Codex Tool-Use Guidance",
            "tag": "修复",
            "summary": "新增模型：deepseek-v4-pro、grok-4.3、owl-alpha（免费）、hy3-preview",
            "detail": "The agent diagnosed and patched 5 failure modes in GPT and Codex tool calling through automated behavioral benchmarking, dramatically improving reliability on OpenAI models. Includes execution discipline guidance and thinking-only prefill continuation for structured reasoning. (#6120, #5414, #5931)",
            "summaryZh": "新增模型：deepseek-v4-pro、grok-4.3、owl-alpha（免费）、hy3-preview"
          },
          {
            "title": "Google AI Studio (Gemini) Native Provider",
            "tag": "优化",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "Direct access to Gemini models through Google's AI Studio API. Includes automatic models.dev registry integration for real-time context length detection across any provider. (#5577)",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "Inactivity-Based Agent Timeouts",
            "tag": "优化",
            "summary": "Gateway and cron timeouts now track actual tool activity instead of wall-clock time. Long-running tasks that are activel",
            "detail": "Gateway and cron timeouts now track actual tool activity instead of wall-clock time. Long-running tasks that are actively working will never be killed — only truly idle agents time out. (#5389, #5440)",
            "summaryZh": null
          },
          {
            "title": "Approval Buttons on Slack & Telegram",
            "tag": "优化",
            "summary": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心",
            "detail": "Dangerous command approval via native platform buttons instead of typing `/approve`. Slack gets thread context preservation; Telegram gets emoji reactions for approval status. (#5890, #5975)",
            "summaryZh": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心"
          },
          {
            "title": "MCP OAuth 2.1 PKCE + OSV Malware Scanning",
            "tag": "安全",
            "summary": "MCP 增强：SSE 传输 + OAuth 转发、过期管道重试、图片结果以 MEDIA tag 呈现",
            "detail": "Full standards-compliant OAuth for MCP server authentication, plus automatic malware scanning of MCP extension packages via the OSV vulnerability database. (#5420, #5305)",
            "summaryZh": "MCP 增强：SSE 传输 + OAuth 转发、过期管道重试、图片结果以 MEDIA tag 呈现"
          },
          {
            "title": "Centralized Logging & Config Validation",
            "tag": "优化",
            "summary": "Structured logging to `~/.hermes/logs/` (agent.log + errors.log) with the `hermes logs` command for tailing and filterin",
            "detail": "Structured logging to `~/.hermes/logs/` (agent.log + errors.log) with the `hermes logs` command for tailing and filtering. Config structure validation catches malformed YAML at startup before it causes cryptic failures. (#5430, #5426)",
            "summaryZh": null
          },
          {
            "title": "Plugin System Expansion",
            "tag": "优化",
            "summary": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识",
            "detail": "Plugins can now register CLI subcommands, receive request-scoped API hooks with correlation IDs, prompt for required env vars during install, and hook into session lifecycle events (finalize/reset). (#5295, #5427, #5470, #6129)",
            "summaryZh": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识"
          },
          {
            "title": "Matrix Tier 1 & Platform Hardening",
            "tag": "修复",
            "summary": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心",
            "detail": "Matrix gets reactions, read receipts, rich formatting, and room management. Discord adds channel controls and ignored channels. Signal gets full MEDIA: tag delivery. Mattermost gets file attachments. Comprehensive reliability fixes across all platforms. (#5275, #5975, #5602)",
            "summaryZh": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心"
          },
          {
            "title": "Security Hardening Pass",
            "tag": "安全",
            "summary": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识",
            "detail": "Consolidated SSRF protections, timing attack mitigations, tar traversal prevention, credential leakage guards, cron path traversal hardening, and cross-session isolation. Terminal workdir sanitization across all backends. (#5944, #5613, #5629) ---",
            "summaryZh": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识"
          }
        ]
      },
      {
        "version": "v2026.4.3",
        "name": "Hermes Agent v0.7.0 (v2026.4.3)",
        "date": "2026-04-03",
        "url": "https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.3",
        "features": [
          {
            "title": "Pluggable Memory Provider Interface",
            "tag": "优化",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "Memory is now an extensible plugin system. Third-party memory backends (Honcho, vector stores, custom DBs) implement a simple provider ABC and register via the plugin system. Built-in memory is the default provider. Honcho integration restored to full parity as the reference plugin with profile-scop",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "Same-Provider Credential Pools",
            "tag": "优化",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "Configure multiple API keys for the same provider with automatic rotation. Thread-safe `least_used` strategy distributes load across keys, and 401 failures trigger automatic rotation to the next credential. Set up via the setup wizard or `credential_pool` config. (#4188, #4300, #4361)",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "Camofox Anti-Detection Browser Backend",
            "tag": "安全",
            "summary": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识",
            "detail": "New local browser backend using Camoufox for stealth browsing. Persistent sessions with VNC URL discovery for visual debugging, configurable SSRF bypass for local backends, auto-install via `hermes tools`. (#4008, #4419, #4292)",
            "summaryZh": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识"
          },
          {
            "title": "Inline Diff Previews",
            "tag": "修复",
            "summary": "File write and patch operations now show inline diffs in the tool activity feed, giving you visual confirmation of what ",
            "detail": "File write and patch operations now show inline diffs in the tool activity feed, giving you visual confirmation of what changed before the agent moves on. (#4411, #4423)",
            "summaryZh": null
          },
          {
            "title": "API Server Session Continuity & Tool Streaming",
            "tag": "新功能",
            "summary": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识",
            "detail": "The API server (Open WebUI integration) now streams tool progress events in real-time and supports `X-Hermes-Session-Id` headers for persistent sessions across requests. Sessions persist to the shared SessionDB. (#4092, #4478, #4802)",
            "summaryZh": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识"
          },
          {
            "title": "ACP: Client-Provided MCP Servers",
            "tag": "新功能",
            "summary": "MCP 增强：SSE 传输 + OAuth 转发、过期管道重试、图片结果以 MEDIA tag 呈现",
            "detail": "Editor integrations (VS Code, Zed, JetBrains) can now register their own MCP servers, which Hermes picks up as additional agent tools. Your editor's MCP ecosystem flows directly into the agent. (#4705)",
            "summaryZh": "MCP 增强：SSE 传输 + OAuth 转发、过期管道重试、图片结果以 MEDIA tag 呈现"
          },
          {
            "title": "Gateway Hardening",
            "tag": "优化",
            "summary": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识",
            "detail": "Major stability pass across race conditions, photo media delivery, flood control, stuck sessions, approval routing, and compression death spirals. The gateway is substantially more reliable in production. (#4727, #4750, #4798, #4557)",
            "summaryZh": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识"
          },
          {
            "title": "Security: Secret Exfiltration Blocking",
            "tag": "安全",
            "summary": "Browser URLs and LLM responses are now scanned for secret patterns, blocking exfiltration attempts via URL encoding, bas",
            "detail": "Browser URLs and LLM responses are now scanned for secret patterns, blocking exfiltration attempts via URL encoding, base64, or prompt injection. Credential directory protections expanded to `.docker`, `.azure`, `.config/gh`. Execute_code sandbox output is redacted. (#4483, #4360, #4305, #4327) ---",
            "summaryZh": null
          }
        ]
      }
    ]
  },
  {
    "label": "2026年03月",
    "id": "2026-03",
    "releases": [
      {
        "version": "v2026.3.30",
        "name": "Hermes Agent v0.6.0 (v2026.3.30)",
        "date": "2026-03-30",
        "url": "https://github.com/NousResearch/hermes-agent/releases/tag/v2026.3.30",
        "features": [
          {
            "title": "Profiles — Multi-Instance Hermes",
            "tag": "优化",
            "summary": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识",
            "detail": "Run multiple isolated Hermes instances from the same installation. Each profile gets its own config, memory, sessions, skills, and gateway service. Create with `hermes profile create`, switch with `hermes -p <name>`, export/import for sharing. Full token-lock isolation prevents two profiles from usi",
            "summaryZh": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识"
          },
          {
            "title": "MCP Server Mode",
            "tag": "新功能",
            "summary": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识",
            "detail": "Expose Hermes conversations and sessions to any MCP-compatible client (Claude Desktop, Cursor, VS Code, etc.) via `hermes mcp serve`. Browse conversations, read messages, search across sessions, and manage attachments — all through the Model Context Protocol. Supports both stdio and Streamable HTTP ",
            "summaryZh": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识"
          },
          {
            "title": "Docker Container",
            "tag": "修复",
            "summary": "Official Dockerfile for running Hermes Agent in a container. Supports both CLI and gateway modes with volume-mounted con",
            "detail": "Official Dockerfile for running Hermes Agent in a container. Supports both CLI and gateway modes with volume-mounted config. (#3668, closes #850)",
            "summaryZh": null
          },
          {
            "title": "Ordered Fallback Provider Chain",
            "tag": "修复",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "Configure multiple inference providers with automatic failover. When your primary provider returns errors or is unreachable, Hermes automatically tries the next provider in the chain. Configure via `fallback_providers` in config.yaml. (#3813, closes #1734)",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "Feishu/Lark Platform Support",
            "tag": "修复",
            "summary": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心",
            "detail": "Full gateway adapter for Feishu (飞书) and Lark with event subscriptions, message cards, group chat, image/file attachments, and interactive card callbacks. (#3799, #3817, closes #1788)",
            "summaryZh": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心"
          },
          {
            "title": "WeCom (Enterprise WeChat) Platform Support",
            "tag": "新功能",
            "summary": "语音克隆：xAI Custom Voices 作为 TTS provider，支持声音克隆",
            "detail": "New gateway adapter for WeCom (企业微信) with text/image/voice messages, group chats, and callback verification. (#3847)",
            "summaryZh": "语音克隆：xAI Custom Voices 作为 TTS provider，支持声音克隆"
          },
          {
            "title": "Slack Multi-Workspace OAuth",
            "tag": "安全",
            "summary": "100 条新 CLI 启动提示，覆盖 cron/kanban/curator/plugins 等隐藏功能",
            "detail": "Connect a single Hermes gateway to multiple Slack workspaces via OAuth token file. Each workspace gets its own bot token, resolved dynamically per incoming event. (#3903)",
            "summaryZh": "100 条新 CLI 启动提示，覆盖 cron/kanban/curator/plugins 等隐藏功能"
          },
          {
            "title": "Telegram Webhook Mode & Group Controls",
            "tag": "新功能",
            "summary": "transform_llm_output hook：插件可在输出到达对话前重塑/过滤 LLM 回复",
            "detail": "Run the Telegram adapter in webhook mode as an alternative to polling — faster response times and better for production deployments behind a reverse proxy. New group mention gating controls when the bot responds: always, only when @mentioned, or via regex triggers. (#3880, #3870)",
            "summaryZh": "transform_llm_output hook：插件可在输出到达对话前重塑/过滤 LLM 回复"
          },
          {
            "title": "Exa Search Backend",
            "tag": "新功能",
            "summary": "Add Exa as an alternative web search and content extraction backend alongside Firecrawl and DuckDuckGo. Set `EXA_API_KEY",
            "detail": "Add Exa as an alternative web search and content extraction backend alongside Firecrawl and DuckDuckGo. Set `EXA_API_KEY` and configure as preferred backend. (#3648)",
            "summaryZh": null
          },
          {
            "title": "Skills & Credentials on Remote Backends",
            "tag": "修复",
            "summary": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识",
            "detail": "Mount skill directories and credential files into Modal and Docker containers, so remote terminal sessions have access to the same skills and secrets as local execution. (#3890, #3671, closes #3665, #3433) ---",
            "summaryZh": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识"
          }
        ]
      },
      {
        "version": "v2026.3.28",
        "name": "Hermes Agent v0.5.0 (v2026.3.28)",
        "date": "2026-03-28",
        "url": "https://github.com/NousResearch/hermes-agent/releases/tag/v2026.3.28",
        "features": [
          {
            "title": "Nous Portal now supports 400+ models",
            "tag": "新功能",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "The Nous Research inference portal has expanded dramatically, giving Hermes Agent users access to over 400 models through a single provider endpoint",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "Hugging Face as a first-class inference provider",
            "tag": "新功能",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "Full integration with HF Inference API including curated agentic model picker that maps to OpenRouter analogues, live `/models` endpoint probe, and setup wizard flow (#3419, #3440)",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "Telegram Private Chat Topics",
            "tag": "优化",
            "summary": "新增可选技能：Shopify、here.now、shop-app、Anthropic 金融、kanban-video、searxng-search",
            "detail": "Project-based conversations with functional skill binding per topic, enabling isolated workflows within a single Telegram chat (#3163)",
            "summaryZh": "新增可选技能：Shopify、here.now、shop-app、Anthropic 金融、kanban-video、searxng-search"
          },
          {
            "title": "Native Modal SDK backend",
            "tag": "优化",
            "summary": "Replaced swe-rex dependency with native Modal SDK (`Sandbox.create.aio` + `exec.aio`), eliminating tunnels and simplifyi",
            "detail": "Replaced swe-rex dependency with native Modal SDK (`Sandbox.create.aio` + `exec.aio`), eliminating tunnels and simplifying the Modal terminal backend (#3538)",
            "summaryZh": null
          },
          {
            "title": "Plugin lifecycle hooks activated",
            "tag": "优化",
            "summary": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识",
            "detail": "`pre_llm_call`, `post_llm_call`, `on_session_start`, and `on_session_end` hooks now fire in the agent loop and CLI/gateway, completing the plugin hook system (#3542)",
            "summaryZh": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识"
          },
          {
            "title": "Improved OpenAI Model Reliability",
            "tag": "修复",
            "summary": "新增模型：deepseek-v4-pro、grok-4.3、owl-alpha（免费）、hy3-preview",
            "detail": "Added `GPT_TOOL_USE_GUIDANCE` to prevent GPT models from describing intended actions instead of making tool calls, plus automatic stripping of stale budget warnings from conversation history that caused models to avoid tools across turns (#3528)",
            "summaryZh": "新增模型：deepseek-v4-pro、grok-4.3、owl-alpha（免费）、hy3-preview"
          },
          {
            "title": "Nix flake",
            "tag": "修复",
            "summary": "Full uv2nix build, NixOS module with persistent container mode, auto-generated config keys from Python source, and suffi",
            "detail": "Full uv2nix build, NixOS module with persistent container mode, auto-generated config keys from Python source, and suffix PATHs for agent-friendliness (#20, #3274, #3061) by @alt-glitch",
            "summaryZh": null
          },
          {
            "title": "Supply chain hardening",
            "tag": "修复",
            "summary": "Removed compromised `litellm` dependency, pinned all dependency version ranges, regenerated `uv.lock` with hashes, added",
            "detail": "Removed compromised `litellm` dependency, pinned all dependency version ranges, regenerated `uv.lock` with hashes, added CI workflow scanning PRs for supply chain attack patterns, and bumped deps to fix CVEs (#2796, #2810, #2812, #2816, #3073)",
            "summaryZh": null
          },
          {
            "title": "Anthropic output limits fix",
            "tag": "修复",
            "summary": "新增模型：deepseek-v4-pro、grok-4.3、owl-alpha（免费）、hy3-preview",
            "detail": "Replaced hardcoded 16K `max_tokens` with per-model native output limits (128K for Opus 4.6, 64K for Sonnet 4.6), fixing \"Response truncated\" and thinking-budget exhaustion on direct Anthropic API (#3426, #3444) ---",
            "summaryZh": "新增模型：deepseek-v4-pro、grok-4.3、owl-alpha（免费）、hy3-preview"
          }
        ]
      },
      {
        "version": "v2026.3.23",
        "name": "Hermes Agent v0.4.0 (v2026.3.23)",
        "date": "2026-03-24",
        "url": "https://github.com/NousResearch/hermes-agent/releases/tag/v2026.3.23",
        "features": [
          {
            "title": "OpenAI-compatible API server",
            "tag": "新功能",
            "summary": "Expose Hermes as an `/v1/chat/completions` endpoint with a new `/api/jobs` REST API for cron job management, hardened wi",
            "detail": "Expose Hermes as an `/v1/chat/completions` endpoint with a new `/api/jobs` REST API for cron job management, hardened with input limits, field whitelists, SQLite-backed response persistence, and CORS origin protection (#1756, #2450, #2456, #2451, #2472)",
            "summaryZh": null
          },
          {
            "title": "6 new messaging platform adapters",
            "tag": "新功能",
            "summary": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心",
            "detail": "Signal, DingTalk, SMS (Twilio), Mattermost, Matrix, and Webhook adapters join Telegram, Discord, and WhatsApp. Gateway auto-reconnects failed platforms with exponential backoff (#2206, #1685, #1688, #1683, #2166, #2584)",
            "summaryZh": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心"
          },
          {
            "title": "@ context references",
            "tag": "优化",
            "summary": "Claude Code-style `@file` and `@url` context injection with tab completions in the CLI (#2343, #2482)",
            "detail": "Claude Code-style `@file` and `@url` context injection with tab completions in the CLI (#2343, #2482)",
            "summaryZh": null
          },
          {
            "title": "4 new inference providers",
            "tag": "安全",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "GitHub Copilot (OAuth + token validation), Alibaba Cloud / DashScope, Kilo Code, and OpenCode Zen/Go (#1924, #1879 by @mchzimm, #1673, #1666, #1650)",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "MCP server management CLI",
            "tag": "安全",
            "summary": "MCP 增强：SSE 传输 + OAuth 转发、过期管道重试、图片结果以 MEDIA tag 呈现",
            "detail": "`hermes mcp` commands for installing, configuring, and authenticating MCP servers with full OAuth 2.1 PKCE flow (#2465)",
            "summaryZh": "MCP 增强：SSE 传输 + OAuth 转发、过期管道重试、图片结果以 MEDIA tag 呈现"
          },
          {
            "title": "Gateway prompt caching",
            "tag": "优化",
            "summary": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识",
            "detail": "Cache AIAgent instances per session, preserving Anthropic prompt cache across turns for dramatic cost reduction on long conversations (#2282, #2284, #2361)",
            "summaryZh": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识"
          },
          {
            "title": "Context compression overhaul",
            "tag": "新功能",
            "summary": "新增模型：deepseek-v4-pro、grok-4.3、owl-alpha（免费）、hy3-preview",
            "detail": "Structured summaries with iterative updates, token-budget tail protection, configurable summary endpoint, and fallback model support (#2323, #1727, #2224)",
            "summaryZh": "新增模型：deepseek-v4-pro、grok-4.3、owl-alpha（免费）、hy3-preview"
          },
          {
            "title": "Streaming enabled by default",
            "tag": "修复",
            "summary": "CLI streaming on by default with proper spinner/tool progress display during streaming mode, plus extensive linebreak an",
            "detail": "CLI streaming on by default with proper spinner/tool progress display during streaming mode, plus extensive linebreak and concatenation fixes (#2340, #2161, #2258) ---",
            "summaryZh": null
          }
        ]
      },
      {
        "version": "v2026.3.17",
        "name": "Hermes Agent v0.3.0 (v2026.3.17)",
        "date": "2026-03-17",
        "url": "https://github.com/NousResearch/hermes-agent/releases/tag/v2026.3.17",
        "features": [
          {
            "title": "Unified Streaming Infrastructure",
            "tag": "优化",
            "summary": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心",
            "detail": "Real-time token-by-token delivery in CLI and all gateway platforms. Responses stream as they're generated instead of arriving as a block. (#1538)",
            "summaryZh": "Google Chat 成为第 20 个平台，通用 hook 接口让第三方适配器免改核心"
          },
          {
            "title": "First-Class Plugin Architecture",
            "tag": "修复",
            "summary": "Provider 插件化架构：第三方 provider 可通过插件目录接入，不改核心代码",
            "detail": "Drop Python files into `~/.hermes/plugins/` to extend Hermes with custom tools, commands, and hooks. No forking required. (#1544, #1555)",
            "summaryZh": "Provider 插件化架构：第三方 provider 可通过插件目录接入，不改核心代码"
          },
          {
            "title": "Native Anthropic Provider",
            "tag": "安全",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "Direct Anthropic API calls with Claude Code credential auto-discovery, OAuth PKCE flows, and native prompt caching. No OpenRouter middleman needed. (#1097)",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "Smart Approvals + /stop Command",
            "tag": "优化",
            "summary": "QQBot 原生审批键盘，功能对齐 Telegram/Discord",
            "detail": "Codex-inspired approval system that learns which commands are safe and remembers your preferences. `/stop` kills the current agent run immediately. (#1543)",
            "summaryZh": "QQBot 原生审批键盘，功能对齐 Telegram/Discord"
          },
          {
            "title": "Honcho Memory Integration",
            "tag": "优化",
            "summary": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识",
            "detail": "Async memory writes, configurable recall modes, session title integration, and multi-user isolation in gateway mode. By @erosika. (#736)",
            "summaryZh": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识"
          },
          {
            "title": "Voice Mode",
            "tag": "新功能",
            "summary": "语音克隆：xAI Custom Voices 作为 TTS provider，支持声音克隆",
            "detail": "Push-to-talk in CLI, voice notes in Telegram/Discord, Discord voice channel support, and local Whisper transcription via faster-whisper. (#1299, #1185, #1429)",
            "summaryZh": "语音克隆：xAI Custom Voices 作为 TTS provider，支持声音克隆"
          },
          {
            "title": "Concurrent Tool Execution",
            "tag": "优化",
            "summary": "100 条新 CLI 启动提示，覆盖 cron/kanban/curator/plugins 等隐藏功能",
            "detail": "Multiple independent tool calls now run in parallel via ThreadPoolExecutor, significantly reducing latency for multi-tool turns. (#1152)",
            "summaryZh": "100 条新 CLI 启动提示，覆盖 cron/kanban/curator/plugins 等隐藏功能"
          },
          {
            "title": "PII Redaction",
            "tag": "安全",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "When `privacy.redact_pii` is enabled, personally identifiable information is automatically scrubbed before sending context to LLM providers. (#1542)",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "`/browser connect` via CDP",
            "tag": "修复",
            "summary": "Attach browser tools to a live Chrome instance through Chrome DevTools Protocol. Debug, inspect, and interact with pages",
            "detail": "Attach browser tools to a live Chrome instance through Chrome DevTools Protocol. Debug, inspect, and interact with pages you already have open. (#1549)",
            "summaryZh": null
          },
          {
            "title": "Vercel AI Gateway Provider",
            "tag": "优化",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "Route Hermes through Vercel's AI Gateway for access to their model catalog and infrastructure. (#1628)",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "Centralized Provider Router",
            "tag": "优化",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "Rebuilt provider system with `call_llm` API, unified `/model` command, auto-detect provider on model switch, and direct endpoint overrides for auxiliary/delegation clients. (#1003, #1506, #1375)",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "ACP Server (IDE Integration)",
            "tag": "新功能",
            "summary": "ACP /steer 与 /queue：从 Zed/VS Code/JetBrains 直接引导或排队后续任务",
            "detail": "VS Code, Zed, and JetBrains can now connect to Hermes as an agent backend, with full slash command support. (#1254, #1532)",
            "summaryZh": "ACP /steer 与 /queue：从 Zed/VS Code/JetBrains 直接引导或排队后续任务"
          },
          {
            "title": "Persistent Shell Mode",
            "tag": "优化",
            "summary": "Local and SSH terminal backends can maintain shell state across tool calls — cd, env vars, and aliases persist. By @alt-",
            "detail": "Local and SSH terminal backends can maintain shell state across tool calls — cd, env vars, and aliases persist. By @alt-glitch. (#1067, #1483)",
            "summaryZh": null
          },
          {
            "title": "Agentic On-Policy Distillation (OPD)",
            "tag": "新功能",
            "summary": "New RL training environment for distilling agent policies, expanding the Atropos training ecosystem. (#1149) ---",
            "detail": "New RL training environment for distilling agent policies, expanding the Atropos training ecosystem. (#1149) ---",
            "summaryZh": null
          }
        ]
      },
      {
        "version": "v2026.3.12",
        "name": "Hermes Agent v0.2.0 (2026.3.12)",
        "date": "2026-03-12",
        "url": "https://github.com/NousResearch/hermes-agent/releases/tag/v2026.3.12",
        "features": [
          {
            "title": "Multi-Platform Messaging Gateway",
            "tag": "优化",
            "summary": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识",
            "detail": "Telegram, Discord, Slack, WhatsApp, Signal, Email (IMAP/SMTP), and Home Assistant platforms with unified session management, media attachments, and per-platform tool configuration.",
            "summaryZh": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识"
          },
          {
            "title": "MCP (Model Context Protocol) Client",
            "tag": "新功能",
            "summary": "MCP 增强：SSE 传输 + OAuth 转发、过期管道重试、图片结果以 MEDIA tag 呈现",
            "detail": "Native MCP support with stdio and HTTP transports, reconnection, resource/prompt discovery, and sampling (server-initiated LLM requests). (#291 — @0xbyt4, #301, #753)",
            "summaryZh": "MCP 增强：SSE 传输 + OAuth 转发、过期管道重试、图片结果以 MEDIA tag 呈现"
          },
          {
            "title": "Skills Ecosystem",
            "tag": "优化",
            "summary": "新增可选技能：Shopify、here.now、shop-app、Anthropic 金融、kanban-video、searxng-search",
            "detail": "70+ bundled and optional skills across 15+ categories with a Skills Hub for community discovery, per-platform enable/disable, conditional activation based on tool availability, and prerequisite validation. (#743 — @teyrebaz33, #785 — @teyrebaz33)",
            "summaryZh": "新增可选技能：Shopify、here.now、shop-app、Anthropic 金融、kanban-video、searxng-search"
          },
          {
            "title": "Centralized Provider Router",
            "tag": "优化",
            "summary": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心",
            "detail": "Unified `call_llm()`/`async_call_llm()` API replaces scattered provider logic across vision, summarization, compression, and trajectory saving. All auxiliary consumers route through a single code path with automatic credential resolution. (#1003)",
            "summaryZh": "Provider 插件化：ProviderProfile ABC + plugins/model-providers/ 目录，第三方 provider 无需改核心"
          },
          {
            "title": "ACP Server",
            "tag": "优化",
            "summary": "ACP /steer 与 /queue：从 Zed/VS Code/JetBrains 直接引导或排队后续任务",
            "detail": "VS Code, Zed, and JetBrains editor integration via the Agent Communication Protocol standard. (#949)",
            "summaryZh": "ACP /steer 与 /queue：从 Zed/VS Code/JetBrains 直接引导或排队后续任务"
          },
          {
            "title": "CLI Skin/Theme Engine",
            "tag": "优化",
            "summary": "Data-driven visual customization: banners, spinners, colors, branding. 7 built-in skins + custom YAML skins.",
            "detail": "Data-driven visual customization: banners, spinners, colors, branding. 7 built-in skins + custom YAML skins.",
            "summaryZh": null
          },
          {
            "title": "Git Worktree Isolation",
            "tag": "优化",
            "summary": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识",
            "detail": "`hermes -w` launches isolated agent sessions in git worktrees for safe parallel work on the same repo. (#654)",
            "summaryZh": "API 会话记忆：X-Hermes-Session-Key header 为 memory provider 提供稳定会话标识"
          },
          {
            "title": "Filesystem Checkpoints & Rollback",
            "tag": "优化",
            "summary": "Checkpoints v2：状态持久化重写，真实裁剪，磁盘保护，无孤儿影子仓库",
            "detail": "Automatic snapshots before destructive operations with `/rollback` to restore. (#824)",
            "summaryZh": "Checkpoints v2：状态持久化重写，真实裁剪，磁盘保护，无孤儿影子仓库"
          },
          {
            "title": "3,289 Tests",
            "tag": "优化",
            "summary": "From near-zero test coverage to a comprehensive test suite covering agent, gateway, tools, cron, and CLI. ---",
            "detail": "From near-zero test coverage to a comprehensive test suite covering agent, gateway, tools, cron, and CLI. ---",
            "summaryZh": null
          }
        ]
      }
    ]
  }
];
