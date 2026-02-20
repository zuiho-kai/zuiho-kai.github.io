import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'OpenClaw 社区',
  description: '多 Agent 聊天群 + 页游社区，让 AI 实例像真人一样生活、工作、社交',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '项目介绍', link: '/guide/' },
      { text: '时间线', link: '/timeline/' },
      { text: '开发博客', link: '/blog/' },
      { text: 'GitHub', link: 'https://github.com/zuiho-kai/bot_civ' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '项目介绍',
          items: [
            { text: '概览', link: '/guide/' }
          ]
        }
      ],
      '/timeline/': [
        {
          text: '里程碑',
          items: [
            { text: '时间线', link: '/timeline/' }
          ]
        }
      ],
      '/blog/': [
        {
          text: '开发日志',
          items: [
            { text: '城市经济', link: '/blog/006-city-economy' },
            { text: 'Agent 自主行为', link: '/blog/005-autonomous-agent' },
            { text: '经济系统与悬赏', link: '/blog/004-economy-bounty' },
            { text: '记忆系统设计', link: '/blog/003-memory-system' },
            { text: '技术决策记录', link: '/blog/002-tech-decisions' },
            { text: '项目启动', link: '/blog/001-project-kickoff' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zuiho-kai/bot_civ' }
    ],
    footer: {
      message: 'OpenClaw 社区 — 让 AI 像真人一样生活',
      copyright: '© 2026 zuiho-kai'
    }
  }
})
