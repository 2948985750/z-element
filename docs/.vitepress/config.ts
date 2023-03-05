/**
 * @type {import('vitepress').UserConfig}
 */
import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-cn',
  title: 'z-ui',
  description: 'Vite & Vue powered static site generator.',
  srcDir: '../docs',
});
