/*
 * @Description: ------文件描述------
 * @Creater: snows_l
 * @Date: 2024-03-11 15:12:32
 * @LastEditors: mt 2825533059@qq.com
 * @LastEditTime: 2024-03-20 10:10:53
 * @FilePath: \mt_front_end\docs\.vitepress\config.mts
 * @param: { * } *
 */
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
  head: [
    // 添加图标 <link rel="shortcut icon" href="https://cdn.wostatic.cn/twemoji/13.1.0/svg/2122.svg" type="image/png">
    ['link', { rel: 'icon', href: 'https://cdn.wostatic.cn/twemoji/13.1.0/svg/2122.svg' }]
  ],

  themeConfig: {
    siteTitle: '',
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '个人简历', link: '/mt/mt.md' },
      { text: 'mtDesgin', link: '/markdown-examples.md' },
      {
        text: 'mt学习笔记',
        items: [
          { text: 'JS学习', link: '/Js/继承.md' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      },
      { text: 'mtWorks', link: '/item-4' }
    ],

    // 跳转左侧边栏
    sidebar: {
      '/mt1/': [
        {
          text: '学习笔记',
          // 开启折叠按钮
          collapsed: true,
          items: [
            { text: 'js-继承', link: '/markdown-examples.md' },
            { text: 'Node学习笔记', link: '/study/node.md' },
            { text: 'React学习笔记', link: '/study/react.md' }
          ]
        }
        // { text: 'Markdown Examples', link: '/markdown-examples' },
        // { text: 'Runtime API Examples', link: '/api-examples' }
      ],
      '/Js/': [
        { text: 'Js-继承', link: '/Js/继承.md' },
        { text: 'Item B', link: '/item-2' },
        { text: 'Item C', link: '/item-3' }
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
