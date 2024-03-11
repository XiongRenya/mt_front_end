import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    // 代码块风格
    theme: 'material-theme-palenight',
    // theme:'github-light',
    // 代码块显示行数
    lineNumbers: true
  },
  title: 'mt的前端小窝',
  description: 'Just playing around with Vue and Vitepress.',
  themeConfig: {
    siteTitle: "mt's front-end playground",
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '个人简历', link: 'http://mtya.cn' },
      { text: 'mtDesgin', link: '/markdown-examples.md' },
      {
        text: 'mtDemos',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      },
      { text: 'mtWorks', link: '/item-4' }
    ],

    // 跳转左侧边栏
    sidebar: {
      '/': [
        {
          text: '学习笔记',
          // 开启折叠按钮
          collapsed: true,
          items: [
            { text: 'Vue学习笔记', link: '/markdown-examples.md' },
            { text: 'Node学习笔记', link: '/study/node.md' },
            { text: 'React学习笔记', link: '/study/react.md' }
          ]
        },
        { text: 'Markdown Examples', link: '/markdown-examples' },
        { text: 'Runtime API Examples', link: '/api-examples' }
      ]
    },

    // 右侧
    aside: false,

    // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 - mt'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
});
