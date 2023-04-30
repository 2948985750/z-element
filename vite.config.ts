/// <reference types="vite" />
import fs from 'fs';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';

import path from 'path';
// import ancestors from "postcss-nested-ancestors"; 它支持嵌套规则
// import nested from 'postcss-nested'; //它支持的是类似sass语法的嵌套规则
// import nesting from 'postcss-nesting';
// import postpresetenv from 'postcss-preset-env';
import postcss_import from 'postcss-import';
import tailwindcss from 'tailwindcss';
import nesting from 'tailwindcss/nesting';
import autoprefixer from 'autoprefixer';
import extend from 'postcss-simple-extend';
import cssnano from 'cssnano';
import postcssUrl from 'postcss-url';

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
      formats: ['es', 'cjs', 'iife', 'umd'],
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
      // getJSON: function (cssFileName, json, outputFileName) {
      //   var cssName = path.basename(cssFileName, '.css');
      //   var jsonFileName = path.resolve('./build/' + cssName + '.json');
      //   fs.writeFileSync(jsonFileName, JSON.stringify(json));
      // },
    },
    postcss: {
      plugins: [
        postcss_import(),
        nesting(),
        extend(),
        tailwindcss({ config: './tailwind.config.cjs' }),
        autoprefixer({}),
        cssnano({ preset: 'default' }),
        postcssUrl({
          url: 'inline',
        }),
      ],
    },
  },
  server: {
    // hmr: { overlay: false },
    port: 5174,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~packages': path.resolve(__dirname, './packages/components'),
    },
  },
});
