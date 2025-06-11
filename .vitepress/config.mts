import { defineConfig } from 'vitepress'
import markdownIt from 'markdown-it'
import markdownItFootNote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "English Tube Doc",
  description: "Proven Methods for Mastering English",
  outDir: 'docs/.vitepress/dist',
  base: '/',
  srcDir: 'docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '首页', link: '/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 添加 TOC 配置
    outline: 'deep'  // 显示所有层级的标题
  },
  markdown: {
    config: (md) => {
      md.use(markdownItFootNote)
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  ]
})
