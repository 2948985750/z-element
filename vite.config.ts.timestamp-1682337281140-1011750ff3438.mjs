// vite.config.ts
import { defineConfig } from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+vite@4.3.1_@types+node@18.16.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue@4.1.0_vite@4.3.1+vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueJsx from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue-jsx@3.0.1_vite@4.3.1+vue@3.2.47/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import postcssExtendRule from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+postcss-extend-rule@4.0.0_postcss@8.4.23/node_modules/postcss-extend-rule/dist/index.mjs";
import postcss_import from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+postcss-import@15.1.0_postcss@8.4.23/node_modules/postcss-import/index.js";
import tailwindcss from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+tailwindcss@3.3.1_3fojqsmttcn75cbnzsztj3o6qa/node_modules/tailwindcss/lib/index.js";
import nesting from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+tailwindcss@3.3.1_3fojqsmttcn75cbnzsztj3o6qa/node_modules/tailwindcss/nesting/index.js";
import autoprefixer from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+autoprefixer@10.4.14_postcss@8.4.23/node_modules/autoprefixer/lib/autoprefixer.js";
import extend from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+postcss-simple-extend@1.0.0/node_modules/postcss-simple-extend/index.js";
import cssnano from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+cssnano@5.1.15_postcss@8.4.23/node_modules/cssnano/src/index.js";
var rollupOptions = {
  external: ["vue"],
  output: {
    // Provide global variables to use in the UMD build
    // for externalized deps
    globals: {
      vue: "Vue"
    }
  }
};
var vite_config_default = defineConfig({
  plugins: [vue(), VueJsx()],
  build: {
    rollupOptions,
    minify: false,
    emptyOutDir: false,
    lib: {
      entry: "./src/main.ts",
      name: "SmartyUI",
      fileName: "z-component",
      formats: ["es", "cjs", "iife", "umd"]
    }
  },
  css: {
    postcss: {
      plugins: [
        postcss_import(),
        nesting(),
        postcssExtendRule({ name: "extend", onFunctionalSelector: "ignore" }),
        extend(),
        tailwindcss({ config: "./tailwind.config.cjs" }),
        autoprefixer({}),
        cssnano({ preset: "default" })
      ]
    }
  },
  server: {
    // hmr: { overlay: false },
    port: 5174
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFx2dWUtY29tcG9uZW50cy11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdHNcXFxcdnVlLWNvbXBvbmVudHMtdWlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3RzL3Z1ZS1jb21wb25lbnRzLXVpL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlXCIgLz5cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuaW1wb3J0IFZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4JztcclxuXHJcbi8vIGltcG9ydCBhbmNlc3RvcnMgZnJvbSBcInBvc3Rjc3MtbmVzdGVkLWFuY2VzdG9yc1wiOyBcdTVCODNcdTY1MkZcdTYzMDFcdTVENENcdTU5NTdcdTg5QzRcdTUyMTlcclxuLy8gaW1wb3J0IG5lc3RlZCBmcm9tICdwb3N0Y3NzLW5lc3RlZCc7IC8vXHU1QjgzXHU2NTJGXHU2MzAxXHU3Njg0XHU2NjJGXHU3QzdCXHU0RjNDc2Fzc1x1OEJFRFx1NkNENVx1NzY4NFx1NUQ0Q1x1NTk1N1x1ODlDNFx1NTIxOVxyXG4vLyBpbXBvcnQgbmVzdGluZyBmcm9tICdwb3N0Y3NzLW5lc3RpbmcnO1xyXG4vLyBpbXBvcnQgcG9zdHByZXNldGVudiBmcm9tICdwb3N0Y3NzLXByZXNldC1lbnYnO1xyXG5pbXBvcnQgcG9zdGNzc0V4dGVuZFJ1bGUgZnJvbSAncG9zdGNzcy1leHRlbmQtcnVsZSc7XHJcbmltcG9ydCBwb3N0Y3NzX2ltcG9ydCBmcm9tICdwb3N0Y3NzLWltcG9ydCc7XHJcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICd0YWlsd2luZGNzcyc7XHJcbmltcG9ydCBuZXN0aW5nIGZyb20gJ3RhaWx3aW5kY3NzL25lc3RpbmcnO1xyXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcic7XHJcbmltcG9ydCBleHRlbmQgZnJvbSAncG9zdGNzcy1zaW1wbGUtZXh0ZW5kJztcclxuaW1wb3J0IGNzc25hbm8gZnJvbSAnY3NzbmFubyc7XHJcblxyXG5jb25zdCByb2xsdXBPcHRpb25zID0ge1xyXG4gIGV4dGVybmFsOiBbJ3Z1ZSddLFxyXG4gIG91dHB1dDoge1xyXG4gICAgLy8gUHJvdmlkZSBnbG9iYWwgdmFyaWFibGVzIHRvIHVzZSBpbiB0aGUgVU1EIGJ1aWxkXHJcbiAgICAvLyBmb3IgZXh0ZXJuYWxpemVkIGRlcHNcclxuICAgIGdsb2JhbHM6IHtcclxuICAgICAgdnVlOiAnVnVlJyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3Z1ZSgpLCBWdWVKc3goKV0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnMsXHJcbiAgICBtaW5pZnk6IGZhbHNlLFxyXG4gICAgZW1wdHlPdXREaXI6IGZhbHNlLFxyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiAnLi9zcmMvbWFpbi50cycsXHJcbiAgICAgIG5hbWU6ICdTbWFydHlVSScsXHJcbiAgICAgIGZpbGVOYW1lOiAnei1jb21wb25lbnQnLFxyXG4gICAgICBmb3JtYXRzOiBbJ2VzJywgJ2NqcycsICdpaWZlJywgJ3VtZCddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNzczoge1xyXG4gICAgcG9zdGNzczoge1xyXG4gICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgcG9zdGNzc19pbXBvcnQoKSxcclxuICAgICAgICBuZXN0aW5nKCksXHJcbiAgICAgICAgcG9zdGNzc0V4dGVuZFJ1bGUoeyBuYW1lOiAnZXh0ZW5kJywgb25GdW5jdGlvbmFsU2VsZWN0b3I6ICdpZ25vcmUnIH0pLFxyXG4gICAgICAgIGV4dGVuZCgpLFxyXG4gICAgICAgIHRhaWx3aW5kY3NzKHsgY29uZmlnOiAnLi90YWlsd2luZC5jb25maWcuY2pzJyB9KSxcclxuICAgICAgICBhdXRvcHJlZml4ZXIoe30pLFxyXG4gICAgICAgIGNzc25hbm8oeyBwcmVzZXQ6ICdkZWZhdWx0JyB9KSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIC8vIGhtcjogeyBvdmVybGF5OiBmYWxzZSB9LFxyXG4gICAgcG9ydDogNTE3NCxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFNbkIsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTyxvQkFBb0I7QUFDM0IsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGFBQWE7QUFFcEIsSUFBTSxnQkFBZ0I7QUFBQSxFQUNwQixVQUFVLENBQUMsS0FBSztBQUFBLEVBQ2hCLFFBQVE7QUFBQTtBQUFBO0FBQUEsSUFHTixTQUFTO0FBQUEsTUFDUCxLQUFLO0FBQUEsSUFDUDtBQUFBLEVBQ0Y7QUFDRjtBQUdBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQUEsRUFDekIsT0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxNQUFNLE9BQU8sUUFBUSxLQUFLO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUEsUUFDUCxlQUFlO0FBQUEsUUFDZixRQUFRO0FBQUEsUUFDUixrQkFBa0IsRUFBRSxNQUFNLFVBQVUsc0JBQXNCLFNBQVMsQ0FBQztBQUFBLFFBQ3BFLE9BQU87QUFBQSxRQUNQLFlBQVksRUFBRSxRQUFRLHdCQUF3QixDQUFDO0FBQUEsUUFDL0MsYUFBYSxDQUFDLENBQUM7QUFBQSxRQUNmLFFBQVEsRUFBRSxRQUFRLFVBQVUsQ0FBQztBQUFBLE1BQy9CO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQTtBQUFBLElBRU4sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
