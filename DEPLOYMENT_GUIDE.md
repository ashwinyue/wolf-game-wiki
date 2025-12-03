# GitHub Pages 部署指南

## 🚀 自动部署（推荐）

项目已经配置了 GitHub Actions，当你推送代码到 `main` 分支时，会自动部署到 GitHub Pages。

### 步骤：
1. 推送代码到 main 分支
2. 等待 GitHub Actions 完成部署
3. 访问 https://ashwinyue.github.io/wolf-game-wiki/

### 查看部署状态：
1. 访问 GitHub 仓库页面
2. 点击 "Actions" 标签
3. 查看最新的部署工作流状态

## 🛠️ 手动部署

如果需要手动部署，可以使用以下方法：

### 使用部署脚本
```bash
./deploy.sh
```

### 手动步骤
```bash
# 1. 构建项目
npm run docs:build

# 2. 提交更改
git add .
git commit -m "Update content"

# 3. 推送到 GitHub
git push origin main
```

## 📋 部署配置说明

### 1. GitHub Actions 工作流
- 文件：`.github/workflows/deploy.yml`
- 触发条件：推送代码到 main 分支
- 权限：读取仓库内容，写入页面

### 2. VitePress 配置
- 基础路径：`base: '/wolf-game-wiki/'`
- 构建输出：`.vitepress/dist`

### 3. 分支设置
确保 GitHub 仓库的 Pages 设置中：
- 源：GitHub Actions
- 分支：main

## 🔧 常见问题

### 1. 部署失败
- 检查 GitHub Actions 日志
- 确保所有依赖都已安装
- 验证 VitePress 构建是否成功

### 2. 页面空白或资源加载失败
- 检查基础路径配置是否正确
- 确认构建输出目录结构

### 3. 样式问题
- 检查 CSS 文件是否正确构建
- 验证主题配置

## 📞 支持

如有部署问题，请通过 GitHub Issues 联系我们。