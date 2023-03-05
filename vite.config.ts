/// <reference types="vite" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import nested from 'postcss-nested';
// import ancestors from "postcss-nested-ancestors"; 它支持嵌套规则
import nesting from 'postcss-nesting';
import postpresetenv from 'postcss-preset-env';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

console.log(nesting);

const rollupOptions = {
  external: ['vue'],
  output: {
    // Provide global variables to use in the UMD build
    // for externalized deps
    globals: {
      vue: 'Vue',
    },
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions,
    minify: false,
    emptyOutDir: false,
    lib: {
      entry: './src/main.ts',
      name: 'SmartyUI',
      fileName: 'z-component',
      formats: ['es', 'umd', 'iife'],
    },
  },
  css: {
    postcss: {
      plugins: [
        // nested(),
        // ancestors(),
        nesting({}),
        postpresetenv({ features: { 'nesting-rules': true } }),
        tailwindcss({ config: './tailwind.config.cjs' }),
        autoprefixer({}),
        cssnano({ preset: 'default' }),
      ],
    },
  },
});
