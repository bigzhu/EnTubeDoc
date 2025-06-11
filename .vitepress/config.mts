import { defineConfig } from 'vitepress'
import markdownIt from 'markdown-it'
import markdownItFootNote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "English Tube Doc",
  description: "Proven Methods for Mastering English",
  outDir: 'docs/.vitepress/dist',
  base: '/',
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
    ]
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
