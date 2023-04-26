/// <reference types="vite" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';

import path from 'path'
// import ancestors from "postcss-nested-ancestors"; 它支持嵌套规则
// import nested from 'postcss-nested'; //它支持的是类似sass语法的嵌套规则
// import nesting from 'postcss-nesting';
// import postpresetenv from 'postcss-preset-env';
import postcssExtendRule from 'postcss-extend-rule';
import postcss_import from 'postcss-import';
import tailwindcss from 'tailwindcss';
import nesting from 'tailwindcss/nesting';
import autoprefixer from 'autoprefixer';
import extend from 'postcss-simple-extend';
import cssnano from 'cssnano';

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
  plugins: [vue(), VueJsx()],
  build: {
    rollupOptions,
    minify: false,
    emptyOutDir: false,
    lib: {
      entry: './src/main.ts',
      name: 'SmartyUI',
      fileName: 'z-component',
      formats: ['es', 'cjs', 'iife', 'umd'],
    },
  },
  css: {
    postcss: {
      plugins: [
        postcss_import(),
        nesting(),
        postcssExtendRule({ name: 'extend', onFunctionalSelector: 'ignore' }),
        extend(),
        tailwindcss({ config: './tailwind.config.cjs' }),
        autoprefixer({}),
        cssnano({ preset: 'default' }),
      ],
    },
  },
<<<<<<< HEAD
  server: {
    // hmr: { overlay: false },
    port: 5174,
  },
=======
  // server: {
  //   hmr: { overlay: false },
  // },
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src'),
      '~packages': path.resolve(__dirname, './packages/components')
    }
  }
>>>>>>> 9698571c8c9b5123e87c9033553a99e99c56fdff
});
