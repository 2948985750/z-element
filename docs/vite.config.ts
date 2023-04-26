/// <reference types="vite" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';

// import ancestors from "postcss-nested-ancestors"; 它支持嵌套规则
// import nested from 'postcss-nested'; //它支持的是类似sass语法的嵌套规则
// import nesting from 'postcss-nesting';
// import postpresetenv from 'postcss-preset-env';
import postcssExtendRule from 'postcss-extend-rule';
import postcss_import from 'postcss-import';
import tailwindcss from 'tailwindcss';
import nesting from 'tailwindcss/nesting';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import extend from 'postcss-simple-extend';

// https://vitejs.dev/config/
export default defineConfig({
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
});
