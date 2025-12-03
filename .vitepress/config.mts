import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "狼人杀游戏对话记录",
  description: "基于 Eino ADK 的智能狼人杀游戏中文对话展示",
  base: '/wolf-game-wiki/',
  lang: 'zh-CN',
  
  // 主题配置
  appearance: true,
  lastUpdated: true,
  
  // Markdown 配置
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true,
    config: (md) => {
      // 自定义 Markdown 配置
    }
  },
  
  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },
    
    nav: [
      { text: '快速开始', link: '/guide/' },
      { text: '游戏记录', link: '/games/' },
      { text: '角色介绍', link: '/roles/' },
      { text: '数据统计', link: '/statistics/' },
      { text: '关于项目', link: '/about/' },
      { 
        text: 'GitHub', 
        link: 'https://github.com/your-repo/werewolf-game' 
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '使用指南',
          items: [
            { text: '快速开始', link: '/guide/' }
          ]
        }
      ],
      '/games/': [
        {
          text: '游戏记录',
          items: [
            { text: '最新对局', link: '/games/20251203' },
            { text: '历史对局', link: '/games/history' }
          ]
        }
      ],
      '/roles/': [
        {
          text: '角色介绍',
          items: [
            { text: '角色总览', link: '/roles/' }
          ]
        }
      ],
      '/statistics/': [
        {
          text: '数据统计',
          items: [
            { text: '整体统计', link: '/statistics/' }
          ]
        }
      ],
      '/about/': [
        {
          text: '关于项目',
          items: [
            { text: '项目介绍', link: '/about/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo/werewolf-game' }
    ],

    footer: {
      message: '基于 Eino ADK 框架构建',
      copyright: 'Copyright © 2025-present - 狼人杀游戏系统'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索游戏记录',
                buttonAriaLabel: '搜索游戏记录'
              },
              modal: {
                noResultsText: '无法找到相关游戏记录',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})