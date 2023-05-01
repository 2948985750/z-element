/// <reference types="vite" />
import { defineConfig } from 'vite';
import postcssExtendRule from 'postcss-extend-rule';
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
        nesting(),
        postcssExtendRule({ name: 'extend', onFunctionalSelector: 'ignore' }),
        extend(),
        tailwindcss(/*{ config: '../tailwind.config.cjs' }*/),
        autoprefixer(),
        cssnano({ preset: 'default' }),
      ],
    },
  },
});
