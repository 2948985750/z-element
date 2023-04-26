## 快速开始

本节将介绍如何在项目中使用 z-ui。

## 用法

## 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```Typescript
import { createApp } from 'vue'
import zUi from 'z-ui'
import App from './App.vue'

const app = createApp(App)

app.use(zUi)
app.mount('#app')
```

## 按需导入

您需要使用额外的插件来导入要使用的组件。

### 自动导入

首先你需要安装 unplugin-vue-components 和 unplugin-auto-import 这两款插件

```Shell
pnpm install -D unplugin-vue-components unplugin-auto-import
```

然后把下列代码插入到你的 Vite 或 Webpack 的配置文件中
**vite**

```Typescript
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

**Webpack**

```javascript
// webpack.config.cjs
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
};
```

## 手动导入

手动导入示例如下，样式不需要单独导入。
**App.vue**

```vue
<template>
  <z-button>我是zButton</z-button>
</template>
<script lang="ts" setup>
import { zButton } from 'z-ui';
</script>
```

## Volar 支持
