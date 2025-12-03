# 狼人杀游戏 Wiki

基于 Eino ADK 的智能狼人杀游戏中文对话展示网站

## 🚀 快速开始

### 本地开发
```bash
npm install
npm run docs:dev
```

访问 http://localhost:5173/

### 构建项目
```bash
npm run docs:build
```

### 部署到 GitHub Pages

#### 自动部署（推荐）
1. 推送代码到 main 分支
2. GitHub Actions 会自动部署到 GitHub Pages

#### 手动部署
```bash
# 使用部署脚本
./deploy.sh

# 或者手动构建和推送
npm run docs:build
git add .
git commit -m "Update content"
git push origin main
```

## 📁 项目结构

```
werewolf-wiki/
├── .vitepress/          # VitePress 配置
│   ├── config.mts       # 主配置文件
│   └── theme/           # 自定义主题
├── .github/             # GitHub 配置
│   └── workflows/       # GitHub Actions
├── public/              # 静态资源
│   ├── logo.svg         # 项目 logo
│   └── icons/           # 图标资源
├── guide/               # 使用指南
├── games/               # 游戏记录
├── roles/               # 角色介绍
├── statistics/          # 数据统计
└── about/               # 关于项目
```

## 🎯 功能特性

- ✅ 完整的游戏对话记录展示
- ✅ 角色介绍和策略指南
- ✅ 数据统计和分析
- ✅ 响应式设计
- ✅ 现代化界面
- ✅ 支持 GitHub Pages 部署

## 🌐 访问地址

- **GitHub Pages**: https://ashwinyue.github.io/wolf-game-wiki/
- **本地开发**: http://localhost:5173/

## 🛠️ 技术栈

- [VitePress](https://vitepress.dev/) - 静态网站生成器
- [Vue.js](https://vuejs.org/) - 前端框架
- [TypeScript](https://www.typescriptlang.org/) - 编程语言
- GitHub Pages - 免费托管服务

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

*基于 Eino ADK 构建的智能狼人杀游戏 Wiki*