<div align="center">

<a href="https://t.me/yt_hytj" target="_blank">
  <img src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram"/>
</a>
&nbsp;
<a href="https://youtu.be/72yvroPyuhw" target="_blank">
  <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube"/>
</a>
&nbsp;
<a href="https://github.com/ethgan/meownote-worker" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
</a>

<br/>

<h1>🐾 MeowNote</h1>

<p><strong>基于 Cloudflare Workers + D1 的轻量级私有笔记应用</strong></p>

<p>
  <img src="https://img.shields.io/badge/Cloudflare_Workers-F38020?style=flat-square&logo=cloudflare&logoColor=white"/>
  <img src="https://img.shields.io/badge/D1_Database-F38020?style=flat-square&logo=cloudflare&logoColor=white"/>
  <img src="https://img.shields.io/badge/License-GPLv3-blue?style=flat-square"/>
  <img src="https://img.shields.io/badge/Version-5.0-green?style=flat-square"/>
  <img src="https://img.shields.io/badge/Single_File-Deploy-purple?style=flat-square"/>
</p>

</div>

---

## ✨ 项目简介

**MeowNote** 是一款运行于 Cloudflare Workers 边缘网络的私有笔记应用，前后端全部封装在一个单 JS 文件中，无需服务器，无需数据库购买，零运营成本即可拥有属于自己的笔记空间。CF D1免费版本5G！

---

## 🚀 功能特点

### 📝 笔记管理
- **富文本编辑** — 支持内联图片、文字格式化，所见即所得
- **多卡片样式** — 内置 7 种卡片风格（便利贴、左侧高亮栏、宝丽来相片、撕纸边、毛玻璃、虚线手绘、双边框）
- **卡片配色** — 自定义每张卡片的背景颜色，视觉一目了然
- **置顶 & 多选** — 重要笔记一键置顶，支持批量选择、批量删除
- **标签系统** — 为笔记添加任意标签，侧边栏快速按标签筛选
- **图片附件** — 支持本地上传和 URL 粘贴，图片内联嵌入正文

### 🎨 界面体验
- **明暗双主题** — 深色 / 浅色模式自由切换，护眼舒适
- **主题色自定义** — 从颜色选择器中挑选专属强调色
- **个性化头像** — 侧边栏可上传自定义头像
- **毛玻璃面板** — 侧边栏与顶栏使用 `backdrop-filter` 实现玻璃质感
- **背景图支持** — 可自定义页面背景图片，打造个性化工作台
- **动画流畅** — 卡片悬停缩放、模态淡入、FAB 旋转等细腻动效
- **全面响应式** — 完整适配移动端，支持 iOS Safe Area

### 📊 数据洞察
- **活跃热力图** — 类似 GitHub 贡献图，展示过去 90 天的笔记频率
- **统计面板** — 实时展示笔记总数与标签总数

### 🔗 分享功能
- **一键生成分享链接** — 同时生成「带样式」和「纯文本」两种链接
- **链接有效期** — 可设置 1 小时 / 1 天 / 7 天 / 永久有效
- **分享密码保护** — 可为分享链接设置访问密码
- **分享历史记录** — 本地保存最近 30 条分享记录，方便回溯

### 🔍 搜索 & 导航
- **实时全文搜索** — 按标题与正文即时过滤，支持 `Ctrl/Cmd + K` 快捷键
- **标签快速筛选** — 侧边栏点击标签即可精准筛选
- **侧边栏折叠** — 可一键折叠侧边栏，最大化内容区域

### 📚 复习模式
- **卡片翻转复习** — Flashcard 形式随机抽取笔记进行回顾学习
- **掌握 / 再来一次** — 不熟悉的卡片自动加入再次复习队列

### 🎵 背景音乐
- **浮动音乐播放器** — 可拖拽定位，支持播放 / 暂停 / 进度 / 音量调节
- **自定义曲目** — 添加任意音频 URL 作为背景音乐

### 🔐 安全认证
- **密码保护** — 全站密码登录，Token 有效期 30 天自动续期
- **API 鉴权** — 所有写操作均需 Bearer Token 认证，防止未授权访问

---

## 📦 部署参数说明

| 参数 / 绑定 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `DB` | D1 Database 绑定 | ✅ | Cloudflare D1 数据库，变量名必须为 `DB` |
| `PASSWORD` | 环境变量（Secret） | ✅ | 前端登录密码，建议使用强密码，默认值为 `meow` |

---

## 🛠️ 部署步骤

### 方法一：Cloudflare Dashboard（推荐新手）

**第一步：创建 D1 数据库**

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入左侧菜单 **Workers & Pages → D1**
3. 点击 **Create database**，输入数据库名（例如 `meownote-db`），点击创建
4. 记录数据库 ID，后续配置需要用到

**第二步：创建 Worker**

1. 进入 **Workers & Pages → Create application → Create Worker**
2. 输入 Worker 名称（例如 `meownote`），点击 **Deploy**
3. 部署完成后点击 **Edit code**，将 `Menos_Workers.js` 的全部内容粘贴进去，点击 **Save and Deploy**

**第三步：绑定 D1 数据库**

1. 进入 Worker 设置页 → **Settings → Bindings**
2. 点击 **Add binding → D1 Database**
3. 变量名填写 `DB`，选择刚创建的数据库，点击 **Save**

**第四步：设置环境变量（密码）**

1. 在同一 **Settings** 页面找到 **Variables and Secrets**
2. 点击 **Add variable**，类型选 **Secret**
3. 变量名填写 `PASSWORD`，值填写你的登录密码
4. 点击 **Deploy** 使配置生效

**第五步：访问应用**

访问 Worker 分配的域名（格式为 `https://meownote.YOUR_SUBDOMAIN.workers.dev`），输入密码即可使用。

---

### 方法二：Wrangler CLI（推荐开发者）

**前置要求：** Node.js ≥ 18、npm、Cloudflare 账号

```bash
# 1. 安装 Wrangler
npm install -g wrangler

# 2. 登录 Cloudflare
wrangler login

# 3. 创建 D1 数据库
wrangler d1 create meownote-db
# 命令输出中记录 database_id

# 4. 创建项目目录并添加 Worker 文件
mkdir meownote && cd meownote
cp /path/to/Menos_Workers.js src/index.js
```

**创建 `wrangler.toml` 配置文件：**

```toml
name = "meownote"
main = "src/index.js"
compatibility_date = "2024-01-01"

[[d1_databases]]
binding = "DB"
database_name = "meownote-db"
database_id = "YOUR_DATABASE_ID_HERE"  # 替换为第3步输出的 ID
```

```bash
# 5. 设置登录密码（Secret 方式，推荐）
wrangler secret put PASSWORD
# 按提示输入密码

# 6. 部署
wrangler deploy

# 本地开发调试（可选）
wrangler dev
```

---

### 🔄 数据库 Schema 说明

应用首次访问时会自动执行 Schema 初始化，**无需手动建表**。如需查看表结构，可参考以下 SQL：

```sql
-- 笔记表
CREATE TABLE IF NOT EXISTS memos (
  id TEXT PRIMARY KEY,
  title TEXT DEFAULT '',
  content TEXT DEFAULT '',
  tags TEXT DEFAULT '[]',
  pinned INTEGER DEFAULT 0,
  color TEXT DEFAULT '',
  card_style INTEGER DEFAULT 0,
  canvas_x REAL,
  canvas_y REAL,
  images TEXT DEFAULT '[]',
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

-- 分享链接表
CREATE TABLE IF NOT EXISTS shared_links (
  token TEXT PRIMARY KEY,
  memo_id TEXT NOT NULL,
  mode TEXT DEFAULT 'styled',
  password TEXT,
  expires_at INTEGER,
  created_at INTEGER NOT NULL
);

-- 认证 Token 表
CREATE TABLE IF NOT EXISTS auth_tokens (
  token TEXT PRIMARY KEY,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);
```

---

### 🌐 自定义域名（可选）

1. 在 Cloudflare Dashboard 中进入 Worker → **Settings → Triggers → Custom Domains**
2. 添加你的域名（需提前将域名接入 Cloudflare DNS）
3. 等待证书签发，即可通过自定义域名访问

---

## ❓ 常见问题

**Q：登录后白屏或 API 报错？**  
A：检查 D1 绑定变量名是否为大写 `DB`，并确认已重新 Deploy。

**Q：忘记密码怎么办？**  
A：进入 Worker Settings → Variables，删除旧 `PASSWORD` Secret 并重新添加新密码，然后 Deploy。

**Q：图片上传后刷新消失？**  
A：图片以 Base64 形式内联存储在笔记内容中，直接保存在 D1，无需对象存储。

**Q：可以多人使用吗？**  
A：当前为单密码单用户设计，不建议多人共享同一账号。

---

## 📄 开源协议

本项目基于 **GNU General Public License v3.0 (GPLv3)** 开源协议发布。

```
Copyright (C) 2025  MeowNote Contributors

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
```

你可以自由使用、修改和再分发本项目，但**衍生作品必须同样以 GPLv3 开源**，且须保留原始版权声明。

详见 [LICENSE](./LICENSE) 文件或访问 [gnu.org/licenses/gpl-3.0](https://www.gnu.org/licenses/gpl-3.0.html)。

---

<div align="center">

**如果本项目对你有帮助，请点亮右上角的 ⭐ Star！**

你的支持是持续更新的最大动力 🐾

<br/>

<a href="https://github.com/ethgan/meownote-worker/stargazers">
  <img src="https://img.shields.io/github/stars/YOUR_USERNAME/meownote-worker?style=social" alt="GitHub Stars"/>
</a>

</div>
