#!/bin/bash

# 狼人杀 Wiki 部署脚本
# 用于手动部署到 GitHub Pages

echo "🐺 开始部署狼人杀 Wiki..."

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误: 请在项目根目录运行此脚本"
    exit 1
fi

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  警告: 有未提交的更改，是否继续? (y/N)"
    read -r response
    if [[ ! "$response" =~ ^[Yy]$ ]]; then
        echo "❌ 部署已取消"
        exit 1
    fi
fi

# 构建项目
echo "📦 构建项目..."
npm run docs:build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败"
    exit 1
fi

# 推送到 GitHub
echo "📤 推送到 GitHub..."
git add .
git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')" || echo "没有更改需要提交"
git push origin main

if [ $? -ne 0 ]; then
    echo "❌ 推送失败"
    exit 1
fi

echo "✅ 部署完成！"
echo "📍 访问地址: https://ashwinyue.github.io/wolf-game-wiki/"
echo ""
echo "注意: GitHub Pages 可能需要几分钟时间来更新页面"