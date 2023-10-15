/// <reference types="vite" />

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';

import path from 'path';
import postcssImport from 'postcss-import';
import nesting from 'tailwindcss/nesting';
import extend from 'postcss-extend-rule';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssUrl from 'postcss-url';

// import ancestors from "postcss-nested-ancestors"; 它支持嵌套规则
// import nested from 'postcss-nested'; //它支持的是类似sass语法的嵌套规则
// import nesting from 'postcss-nesting';
// import postpresetenv from 'postcss-preset-env';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueJsx()],
  build: {
    minify: true,
    emptyOutDir: true,
    manifest: true,
    sourcemap: 'inline',
    lib: {
      entry: './packages/components/index.ts',
      name: 'zUI',
      fileName: 'z-ui',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    // 将 CSS 代码嵌入 JavaScript 中
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@packages': path.resolve(__dirname, './packages/components'),
      '@utils': path.resolve(__dirname, './packages/utils'),
    },
  },
});
