import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'OpenClaw 社区',
  description: '多 Agent 聊天群 + 页游社区，让 AI 实例像真人一样生活、工作、社交',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: 'GitHub', link: 'https://github.com/zuiho-kai/bot_civ' }
    ],
    sidebar: {
      '/blog/': [
        {
          text: '开发日志',
          items: [
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
