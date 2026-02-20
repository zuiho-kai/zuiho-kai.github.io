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
          text: '专题文章',
          items: [
            { text: '城市经济', link: '/blog/006-city-economy' },
            { text: 'Agent 自主行为', link: '/blog/005-autonomous-agent' },
            { text: '经济系统与悬赏', link: '/blog/004-economy-bounty' },
            { text: '记忆系统设计', link: '/blog/003-memory-system' },
            { text: '技术决策记录', link: '/blog/002-tech-decisions' },
            { text: '项目启动', link: '/blog/001-project-kickoff' }
          ]
        },
        {
          text: '每日开发日志',
          collapsed: false,
          items: [
            { text: 'Day 7 — 公共记忆 + 原型评估', link: '/blog/daily/day7-0222' },
            { text: 'Day 6 — 交易 + 上网 + 建造', link: '/blog/daily/day6-0220' },
            { text: 'Day 5 — Tool Use 上线', link: '/blog/daily/day5-0219' },
            { text: 'Day 4 — Agent 自主行为', link: '/blog/daily/day4-0218' },
            { text: 'Day 3 — 城市经济闭环', link: '/blog/daily/day3-0217' },
            { text: 'Day 2 — 记忆与经济系统', link: '/blog/daily/day2-0216' },
            { text: 'Day 1 — 从零到能聊天', link: '/blog/daily/day1-0215' }
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
