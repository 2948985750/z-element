/**
 * @type {import('vitepress').UserConfig}
 */
import { defineConfig } from 'vitepress';
export default defineConfig({
  base: '/z-ui-docs/',
  lang: 'zh-cn',
  title: 'z-ui',
  description: 'Vite & Vue powered static site generator.',
  srcDir: '../docs',
  themeConfig: {
    algolia: {
      appId: '',
      apiKey: '<your-api-key>',
      indexName: '<your-index-name>',
    },
    nav: [
      { text: '开始', link: '/' },
      { text: '组件', link: '/components/button' },
      { text: '问题', link: 'https://github.com/...' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    sidebar: {
      '/index': [
        {
          text: '基础',
          items: [{ text: '快速开始', link: '/quick-start' }],
        },
        {
          text: '开发',
          items: [
            { text: '开发指南', link: '/development-guide' },
            { text: '开发常见问题', link: '' },
          ],
        },
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            {
              text: 'Button按钮',
              link: '/components/button',
            },
            {
              text: 'Container 布局容器',
              link: '/components/container',
            },
            {
              text: 'Icon 图标',
              link: '/components/icon',
            },
            {
              text: 'Layout 布局',
              link: '/components/layout',
            },
            {
              text: 'Link 链接',
              link: '/components/link',
            },
          ],
        },
      ],
    },
  },
});
