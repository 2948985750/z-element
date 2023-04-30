// vite.config.ts
import { defineConfig } from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+vite@4.3.2_@types+node@18.16.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue@4.2.1_vite@4.3.2+vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueJsx from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue-jsx@3.0.1_vite@4.3.2+vue@3.2.47/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import path from "path";
import postcss_import from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+postcss-import@15.1.0_postcss@8.4.23/node_modules/postcss-import/index.js";
import tailwindcss from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+tailwindcss@3.3.1_3fojqsmttcn75cbnzsztj3o6qa/node_modules/tailwindcss/lib/index.js";
import nesting from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+tailwindcss@3.3.1_3fojqsmttcn75cbnzsztj3o6qa/node_modules/tailwindcss/nesting/index.js";
import autoprefixer from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+autoprefixer@10.4.14_postcss@8.4.23/node_modules/autoprefixer/lib/autoprefixer.js";
import extend from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+postcss-simple-extend@1.0.0/node_modules/postcss-simple-extend/index.js";
import cssnano from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/registry.npmmirror.com+cssnano@5.1.15_postcss@8.4.23/node_modules/cssnano/src/index.js";
var __vite_injected_original_dirname = "D:\\projects\\vue-components-ui";
var vite_config_default = defineConfig({
  plugins: [vue(), VueJsx()],
  build: {
    minify: true,
    emptyOutDir: false,
    manifest: true,
    sourcemap: "inline",
    lib: {
      entry: "./src/main.ts",
      name: "SmartyUI",
      fileName: "z-component",
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
    postcss: {
      plugins: [
        postcss_import(),
        nesting(),
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFx2dWUtY29tcG9uZW50cy11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdHNcXFxcdnVlLWNvbXBvbmVudHMtdWlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3RzL3Z1ZS1jb21wb25lbnRzLXVpL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlXCIgLz5cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuaW1wb3J0IFZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4JztcclxuXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG4vLyBpbXBvcnQgYW5jZXN0b3JzIGZyb20gXCJwb3N0Y3NzLW5lc3RlZC1hbmNlc3RvcnNcIjsgXHU1QjgzXHU2NTJGXHU2MzAxXHU1RDRDXHU1OTU3XHU4OUM0XHU1MjE5XHJcbi8vIGltcG9ydCBuZXN0ZWQgZnJvbSAncG9zdGNzcy1uZXN0ZWQnOyAvL1x1NUI4M1x1NjUyRlx1NjMwMVx1NzY4NFx1NjYyRlx1N0M3Qlx1NEYzQ3Nhc3NcdThCRURcdTZDRDVcdTc2ODRcdTVENENcdTU5NTdcdTg5QzRcdTUyMTlcclxuLy8gaW1wb3J0IG5lc3RpbmcgZnJvbSAncG9zdGNzcy1uZXN0aW5nJztcclxuLy8gaW1wb3J0IHBvc3RwcmVzZXRlbnYgZnJvbSAncG9zdGNzcy1wcmVzZXQtZW52JztcclxuaW1wb3J0IHBvc3Rjc3NfaW1wb3J0IGZyb20gJ3Bvc3Rjc3MtaW1wb3J0JztcclxuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ3RhaWx3aW5kY3NzJztcclxuaW1wb3J0IG5lc3RpbmcgZnJvbSAndGFpbHdpbmRjc3MvbmVzdGluZyc7XHJcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJztcclxuaW1wb3J0IGV4dGVuZCBmcm9tICdwb3N0Y3NzLXNpbXBsZS1leHRlbmQnO1xyXG5pbXBvcnQgY3NzbmFubyBmcm9tICdjc3NuYW5vJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3Z1ZSgpLCBWdWVKc3goKV0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIG1pbmlmeTogdHJ1ZSxcclxuICAgIGVtcHR5T3V0RGlyOiBmYWxzZSxcclxuICAgIG1hbmlmZXN0OiB0cnVlLFxyXG4gICAgc291cmNlbWFwOiAnaW5saW5lJyxcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogJy4vc3JjL21haW4udHMnLFxyXG4gICAgICBuYW1lOiAnU21hcnR5VUknLFxyXG4gICAgICBmaWxlTmFtZTogJ3otY29tcG9uZW50JyxcclxuICAgICAgZm9ybWF0czogWydlcycsICdjanMnLCAnaWlmZScsICd1bWQnXSxcclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGV4dGVybmFsOiBbJ3Z1ZSddLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAvLyBQcm92aWRlIGdsb2JhbCB2YXJpYWJsZXMgdG8gdXNlIGluIHRoZSBVTUQgYnVpbGRcclxuICAgICAgICAvLyBmb3IgZXh0ZXJuYWxpemVkIGRlcHNcclxuICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICB2dWU6ICdWdWUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBwb3N0Y3NzOiB7XHJcbiAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICBwb3N0Y3NzX2ltcG9ydCgpLFxyXG4gICAgICAgIG5lc3RpbmcoKSxcclxuICAgICAgICBleHRlbmQoKSxcclxuICAgICAgICB0YWlsd2luZGNzcyh7IGNvbmZpZzogJy4vdGFpbHdpbmQuY29uZmlnLmNqcycgfSksXHJcbiAgICAgICAgYXV0b3ByZWZpeGVyKHt9KSxcclxuICAgICAgICBjc3NuYW5vKHsgcHJlc2V0OiAnZGVmYXVsdCcgfSksXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICAvLyBobXI6IHsgb3ZlcmxheTogZmFsc2UgfSxcclxuICAgIHBvcnQ6IDUxNzQsXHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxyXG4gICAgICAnfnBhY2thZ2VzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vcGFja2FnZXMvY29tcG9uZW50cycpLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFFbkIsT0FBTyxVQUFVO0FBS2pCLE9BQU8sb0JBQW9CO0FBQzNCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sYUFBYTtBQUNwQixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLFlBQVk7QUFDbkIsT0FBTyxhQUFhO0FBZnBCLElBQU0sbUNBQW1DO0FBa0J6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUFBLEVBQ3pCLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxJQUNWLFdBQVc7QUFBQSxJQUNYLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxNQUFNLE9BQU8sUUFBUSxLQUFLO0FBQUEsSUFDdEM7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBO0FBQUE7QUFBQSxRQUdOLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUEsUUFDUCxlQUFlO0FBQUEsUUFDZixRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxZQUFZLEVBQUUsUUFBUSx3QkFBd0IsQ0FBQztBQUFBLFFBQy9DLGFBQWEsQ0FBQyxDQUFDO0FBQUEsUUFDZixRQUFRLEVBQUUsUUFBUSxVQUFVLENBQUM7QUFBQSxNQUMvQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUE7QUFBQSxJQUVOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDcEMsYUFBYSxLQUFLLFFBQVEsa0NBQVcsdUJBQXVCO0FBQUEsSUFDOUQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
