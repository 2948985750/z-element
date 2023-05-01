// vite.config.ts
import { defineConfig } from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+vite@4.3.3_@types+node@18.16.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue@4.2.1_vite@4.3.3+vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueJsx from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue-jsx@3.0.1_vite@4.3.3+vue@3.2.47/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import path from "path";
import postcss_import from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+postcss-import@15.1.0_postcss@8.4.23/node_modules/postcss-import/index.js";
import tailwindcss from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+tailwindcss@3.3.1_3fojqsmttcn75cbnzsztj3o6qa/node_modules/tailwindcss/lib/index.js";
import nesting from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+tailwindcss@3.3.1_3fojqsmttcn75cbnzsztj3o6qa/node_modules/tailwindcss/nesting/index.js";
import autoprefixer from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+autoprefixer@10.4.14_postcss@8.4.23/node_modules/autoprefixer/lib/autoprefixer.js";
import extend from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+postcss-simple-extend@1.0.0/node_modules/postcss-simple-extend/index.js";
import cssnano from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+cssnano@5.1.15_postcss@8.4.23/node_modules/cssnano/src/index.js";
import postcssUrl from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+postcss-url@10.1.3_postcss@8.4.23/node_modules/postcss-url/src/index.js";
var __vite_injected_original_dirname = "D:\\projects\\vue-components-ui";
var vite_config_default = defineConfig({
  plugins: [vue(), VueJsx()],
  build: {
    minify: true,
    emptyOutDir: true,
    manifest: true,
    sourcemap: "inline",
    lib: {
      entry: "./packages/components/index.ts",
      name: "zUI",
      fileName: "z-ui",
      formats: ["es", "cjs", "iife", "umd"]
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue"
        }
      }
    }
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
        tailwindcss({ config: "./tailwind.config.cjs" }),
        autoprefixer({}),
        cssnano({ preset: "default" }),
        postcssUrl({
          url: "inline"
        })
      ]
    }
  },
  server: {
    // hmr: { overlay: false },
    port: 5174
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "~packages": path.resolve(__vite_injected_original_dirname, "./packages/components")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFx2dWUtY29tcG9uZW50cy11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdHNcXFxcdnVlLWNvbXBvbmVudHMtdWlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3RzL3Z1ZS1jb21wb25lbnRzLXVpL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlXCIgLz5cclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuaW1wb3J0IFZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4JztcclxuXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG4vLyBpbXBvcnQgYW5jZXN0b3JzIGZyb20gXCJwb3N0Y3NzLW5lc3RlZC1hbmNlc3RvcnNcIjsgXHU1QjgzXHU2NTJGXHU2MzAxXHU1RDRDXHU1OTU3XHU4OUM0XHU1MjE5XHJcbi8vIGltcG9ydCBuZXN0ZWQgZnJvbSAncG9zdGNzcy1uZXN0ZWQnOyAvL1x1NUI4M1x1NjUyRlx1NjMwMVx1NzY4NFx1NjYyRlx1N0M3Qlx1NEYzQ3Nhc3NcdThCRURcdTZDRDVcdTc2ODRcdTVENENcdTU5NTdcdTg5QzRcdTUyMTlcclxuLy8gaW1wb3J0IG5lc3RpbmcgZnJvbSAncG9zdGNzcy1uZXN0aW5nJztcclxuLy8gaW1wb3J0IHBvc3RwcmVzZXRlbnYgZnJvbSAncG9zdGNzcy1wcmVzZXQtZW52JztcclxuaW1wb3J0IHBvc3Rjc3NfaW1wb3J0IGZyb20gJ3Bvc3Rjc3MtaW1wb3J0JztcclxuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ3RhaWx3aW5kY3NzJztcclxuaW1wb3J0IG5lc3RpbmcgZnJvbSAndGFpbHdpbmRjc3MvbmVzdGluZyc7XHJcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJztcclxuaW1wb3J0IGV4dGVuZCBmcm9tICdwb3N0Y3NzLXNpbXBsZS1leHRlbmQnO1xyXG5pbXBvcnQgY3NzbmFubyBmcm9tICdjc3NuYW5vJztcclxuaW1wb3J0IHBvc3Rjc3NVcmwgZnJvbSAncG9zdGNzcy11cmwnO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbdnVlKCksIFZ1ZUpzeCgpXSxcclxuICBidWlsZDoge1xyXG4gICAgbWluaWZ5OiB0cnVlLFxyXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgICBtYW5pZmVzdDogdHJ1ZSxcclxuICAgIHNvdXJjZW1hcDogJ2lubGluZScsXHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6ICcuL3BhY2thZ2VzL2NvbXBvbmVudHMvaW5kZXgudHMnLFxyXG4gICAgICBuYW1lOiAnelVJJyxcclxuICAgICAgZmlsZU5hbWU6ICd6LXVpJyxcclxuICAgICAgZm9ybWF0czogWydlcycsICdjanMnLCAnaWlmZScsICd1bWQnXSxcclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGV4dGVybmFsOiBbJ3Z1ZSddLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAvLyBQcm92aWRlIGdsb2JhbCB2YXJpYWJsZXMgdG8gdXNlIGluIHRoZSBVTUQgYnVpbGRcclxuICAgICAgICAvLyBmb3IgZXh0ZXJuYWxpemVkIGRlcHNcclxuICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICB2dWU6ICdWdWUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBtb2R1bGVzOiB7XHJcbiAgICAgIC8vIGdldEpTT046IGZ1bmN0aW9uIChjc3NGaWxlTmFtZSwganNvbiwgb3V0cHV0RmlsZU5hbWUpIHtcclxuICAgICAgLy8gICB2YXIgY3NzTmFtZSA9IHBhdGguYmFzZW5hbWUoY3NzRmlsZU5hbWUsICcuY3NzJyk7XHJcbiAgICAgIC8vICAgdmFyIGpzb25GaWxlTmFtZSA9IHBhdGgucmVzb2x2ZSgnLi9idWlsZC8nICsgY3NzTmFtZSArICcuanNvbicpO1xyXG4gICAgICAvLyAgIGZzLndyaXRlRmlsZVN5bmMoanNvbkZpbGVOYW1lLCBKU09OLnN0cmluZ2lmeShqc29uKSk7XHJcbiAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG4gICAgcG9zdGNzczoge1xyXG4gICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgcG9zdGNzc19pbXBvcnQoKSxcclxuICAgICAgICBuZXN0aW5nKCksXHJcbiAgICAgICAgZXh0ZW5kKCksXHJcbiAgICAgICAgdGFpbHdpbmRjc3MoeyBjb25maWc6ICcuL3RhaWx3aW5kLmNvbmZpZy5janMnIH0pLFxyXG4gICAgICAgIGF1dG9wcmVmaXhlcih7fSksXHJcbiAgICAgICAgY3NzbmFubyh7IHByZXNldDogJ2RlZmF1bHQnIH0pLFxyXG4gICAgICAgIHBvc3Rjc3NVcmwoe1xyXG4gICAgICAgICAgdXJsOiAnaW5saW5lJyxcclxuICAgICAgICB9KSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIC8vIGhtcjogeyBvdmVybGF5OiBmYWxzZSB9LFxyXG4gICAgcG9ydDogNTE3NCxcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXHJcbiAgICAgICd+cGFja2FnZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9wYWNrYWdlcy9jb21wb25lbnRzJyksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUVuQixPQUFPLFVBQVU7QUFLakIsT0FBTyxvQkFBb0I7QUFDM0IsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGFBQWE7QUFDcEIsT0FBTyxnQkFBZ0I7QUFqQnZCLElBQU0sbUNBQW1DO0FBb0J6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUFBLEVBQ3pCLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxJQUNWLFdBQVc7QUFBQSxJQUNYLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxNQUFNLE9BQU8sUUFBUSxLQUFLO0FBQUEsSUFDdEM7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBO0FBQUE7QUFBQSxRQUdOLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTVQ7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQLGVBQWU7QUFBQSxRQUNmLFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxRQUNQLFlBQVksRUFBRSxRQUFRLHdCQUF3QixDQUFDO0FBQUEsUUFDL0MsYUFBYSxDQUFDLENBQUM7QUFBQSxRQUNmLFFBQVEsRUFBRSxRQUFRLFVBQVUsQ0FBQztBQUFBLFFBQzdCLFdBQVc7QUFBQSxVQUNULEtBQUs7QUFBQSxRQUNQLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQTtBQUFBLElBRU4sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUNwQyxhQUFhLEtBQUssUUFBUSxrQ0FBVyx1QkFBdUI7QUFBQSxJQUM5RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
