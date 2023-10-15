// vite.config.ts
import { defineConfig } from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/vite@4.4.11_@types+node@18.18.4/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/@vitejs+plugin-vue@4.4.0_vite@4.4.11_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueJsx from "file:///D:/projects/vue-components-ui/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.0.2_vite@4.4.11_vue@3.3.4/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import path from "path";
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
      formats: ["es", "cjs"]
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
      localsConvention: "camelCase"
    }
    // 将 CSS 代码嵌入 JavaScript 中
  },
  resolve: {
    alias: {
      "@src": path.resolve(__vite_injected_original_dirname, "./src"),
      "@packages": path.resolve(__vite_injected_original_dirname, "./packages/components"),
      "@utils": path.resolve(__vite_injected_original_dirname, "./packages/utils")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFx2dWUtY29tcG9uZW50cy11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdHNcXFxcdnVlLWNvbXBvbmVudHMtdWlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3RzL3Z1ZS1jb21wb25lbnRzLXVpL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlXCIgLz5cclxuXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XHJcbmltcG9ydCBWdWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCc7XHJcblxyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHBvc3Rjc3NJbXBvcnQgZnJvbSAncG9zdGNzcy1pbXBvcnQnO1xyXG5pbXBvcnQgbmVzdGluZyBmcm9tICd0YWlsd2luZGNzcy9uZXN0aW5nJztcclxuaW1wb3J0IGV4dGVuZCBmcm9tICdwb3N0Y3NzLWV4dGVuZC1ydWxlJztcclxuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ3RhaWx3aW5kY3NzJztcclxuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInO1xyXG5pbXBvcnQgY3NzbmFubyBmcm9tICdjc3NuYW5vJztcclxuaW1wb3J0IHBvc3Rjc3NVcmwgZnJvbSAncG9zdGNzcy11cmwnO1xyXG5cclxuLy8gaW1wb3J0IGFuY2VzdG9ycyBmcm9tIFwicG9zdGNzcy1uZXN0ZWQtYW5jZXN0b3JzXCI7IFx1NUI4M1x1NjUyRlx1NjMwMVx1NUQ0Q1x1NTk1N1x1ODlDNFx1NTIxOVxyXG4vLyBpbXBvcnQgbmVzdGVkIGZyb20gJ3Bvc3Rjc3MtbmVzdGVkJzsgLy9cdTVCODNcdTY1MkZcdTYzMDFcdTc2ODRcdTY2MkZcdTdDN0JcdTRGM0NzYXNzXHU4QkVEXHU2Q0Q1XHU3Njg0XHU1RDRDXHU1OTU3XHU4OUM0XHU1MjE5XHJcbi8vIGltcG9ydCBuZXN0aW5nIGZyb20gJ3Bvc3Rjc3MtbmVzdGluZyc7XHJcbi8vIGltcG9ydCBwb3N0cHJlc2V0ZW52IGZyb20gJ3Bvc3Rjc3MtcHJlc2V0LWVudic7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFt2dWUoKSwgVnVlSnN4KCldLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBtaW5pZnk6IHRydWUsXHJcbiAgICBlbXB0eU91dERpcjogdHJ1ZSxcclxuICAgIG1hbmlmZXN0OiB0cnVlLFxyXG4gICAgc291cmNlbWFwOiAnaW5saW5lJyxcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogJy4vcGFja2FnZXMvY29tcG9uZW50cy9pbmRleC50cycsXHJcbiAgICAgIG5hbWU6ICd6VUknLFxyXG4gICAgICBmaWxlTmFtZTogJ3otdWknLFxyXG4gICAgICBmb3JtYXRzOiBbJ2VzJywgJ2NqcyddLFxyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIC8vIFByb3ZpZGUgZ2xvYmFsIHZhcmlhYmxlcyB0byB1c2UgaW4gdGhlIFVNRCBidWlsZFxyXG4gICAgICAgIC8vIGZvciBleHRlcm5hbGl6ZWQgZGVwc1xyXG4gICAgICAgIGdsb2JhbHM6IHtcclxuICAgICAgICAgIHZ1ZTogJ1Z1ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIG1vZHVsZXM6IHtcclxuICAgICAgbG9jYWxzQ29udmVudGlvbjogJ2NhbWVsQ2FzZScsXHJcbiAgICB9LFxyXG4gICAgLy8gXHU1QzA2IENTUyBcdTRFRTNcdTc4MDFcdTVENENcdTUxNjUgSmF2YVNjcmlwdCBcdTRFMkRcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAc3JjJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXHJcbiAgICAgICdAcGFja2FnZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9wYWNrYWdlcy9jb21wb25lbnRzJyksXHJcbiAgICAgICdAdXRpbHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9wYWNrYWdlcy91dGlscycpLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFFbkIsT0FBTyxVQUFVO0FBTmpCLElBQU0sbUNBQW1DO0FBcUJ6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUFBLEVBQ3pCLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxJQUNWLFdBQVc7QUFBQSxJQUNYLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxJQUN2QjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLEtBQUs7QUFBQSxNQUNoQixRQUFRO0FBQUE7QUFBQTtBQUFBLFFBR04sU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLGtCQUFrQjtBQUFBLElBQ3BCO0FBQUE7QUFBQSxFQUVGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxRQUFRLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDdkMsYUFBYSxLQUFLLFFBQVEsa0NBQVcsdUJBQXVCO0FBQUEsTUFDNUQsVUFBVSxLQUFLLFFBQVEsa0NBQVcsa0JBQWtCO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
