# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

::: tip
组件默认使用 Flex 布局，不需要手动设置 flex 布局相关的样式。
请注意父容器避免使用 inline 相关样式、元素，会导致组件宽度不能撑满。
:::

## 基础布局

使用列创建基础网格布局。

通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

<script setup lang="ts">
import { zRow, zCol } from "../../packages/components/Layout"
</script>

<style lang="postcss" module>
  .gray {
    @apply bg-slate-500;
  }

  .gray-400 {
    @apply bg-slate-400;
  }

  .gray-300 {
    @apply bg-slate-300;
  }

  .mar {
    @apply my-3;
  }
    .btn-context {
    @apply flex items-center justify-start my-2;
  }
  .right {
    order: 3
  }
  .api-table {
    @apply border-collapse w-full;
    display: flex !important;
    flex-wrap: wrap;
  }

  .api-table > tr {
    display: flex !important;
    flex: 1 0 100%;
  }

  .api-table th,td {
    flex: 1 1 25%;
  }
</style>
<ClientOnly>
  <z-row :class="$style['mar']">
    <z-col :class="$style['gray']">&nbsp;</z-col>
  </z-row>
  <z-row :class="$style['mar']">
    <z-col span="12" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="12" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>
  <z-row :class="$style['mar']">
    <z-col span="8" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="8" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="8" :class="$style['gray-300']">&nbsp;</z-col>
  </z-row>
  <z-row :class="$style['mar']">
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>
  <z-row :class="$style['mar']">
    <z-col span="4" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="4" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="4" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="4" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="4" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="4" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>
</ClientOnly>

::: details 展开/关闭代码

```vue
<template>
  <z-row :class="$style['mar']">
    <z-col :class="$style['gray']">&nbsp;</z-col>
  </z-row>
  <z-row :class="$style['mar']">
    <z-col span="12" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="12" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>
  <z-row :class="$style['mar']">
    <z-col span="8" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="8" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="8" :class="$style['gray-300']">&nbsp;</z-col>
  </z-row>
  <z-row :class="$style['mar']">
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>
  <z-row :class="$style['mar']">
    <z-col span="4" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="4" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="4" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="4" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="4" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="4" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>
</template>

<style lang="postcss" module>
.gray {
  @apply bg-slate-500;
}

.gray-400 {
  @apply bg-slate-400;
}

.gray-300 {
  @apply bg-slate-300;
}

.mar {
  @apply my-3;
}
</style>
```

:::

## 分栏间隔

支持列外边距。

行提供 space 属性来指定列之间的间距，其默认值为 0。

<ClientOnly>
  <z-row :class="$style['mar']" space="20px">
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>
</ClientOnly>

::: details 展开/关闭代码

```vue
<template>
  <z-row :class="$style['mar']" space="20px">
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>
</template>

<style lang="postcss" module>
.gray {
  @apply bg-slate-500;
}

.gray-400 {
  @apply bg-slate-400;
}

.gray-300 {
  @apply bg-slate-300;
}

.mar {
  @apply my-3;
}
</style>
```

:::

## 混合布局

<ClientOnly>
  <z-row :class="$style['mar']" space="20px">
    <z-col span="16" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="8" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>

  <z-row :class="$style['mar']" space="20px">
    <z-col span="8" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="8" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="4" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="4" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>

  <z-row :class="$style['mar']" space="20px">
    <z-col span="4" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="16" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="4" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>
</ClientOnly>

::: details 展开/关闭代码

```vue
<template>
  <z-row :class="$style['mar']" space="20px">
    <z-col span="16" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="8" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>

  <z-row :class="$style['mar']" space="20px">
    <z-col span="8" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="8" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="4" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="4" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>

  <z-row :class="$style['mar']" space="20px">
    <z-col span="4" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="16" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="4" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>
</template>
```

:::

## 列偏移

您可以指定列偏移量。

通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。

<ClientOnly>
  <z-row :class="$style['mar']" space="20px">
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" offset="6" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>

  <z-row :class="$style['mar']" space="20px">
    <z-col span="6" offset="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" offset="6" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>

  <z-row :class="$style['mar']" space="20px">
    <z-col span="12" offset="6" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>
</ClientOnly>

::: details 展开/关闭代码

```vue
<template>
  <z-row :class="$style['mar']" space="20px">
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" offset="6" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>

  <z-row :class="$style['mar']" space="20px">
    <z-col span="6" offset="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" offset="6" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>

  <z-row :class="$style['mar']" space="20px">
    <z-col span="12" offset="6" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>
</template>
```

:::

## 对齐方式

默认使用 flex 布局来对分栏进行灵活的对齐。
您可以通过 justify 属性来定义子元素的排版方式，其取值为：`'start' |'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'`

<ClientOnly>
  <z-row :class="$style['mar']" space="20px" justify="start">
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
  </z-row>

  <z-row :class="$style['mar']" space="20px" justify="center">
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
  </z-row>

  <z-row :class="$style['mar']" space="20px" justify="end">
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>

  <z-row :class="$style['mar']" space="20px" justify="space-between">
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
  </z-row>

  <z-row :class="$style['mar']" space="20px" justify="space-around">
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
  </z-row>

  <z-row :class="$style['mar']" space="20px" justify="space-evenly">
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>
</ClientOnly>

::: details 展开/关闭代码

```vue
<template>
  <z-row :class="$style['mar']" space="20px" justify="start">
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
  </z-row>
  <z-row :class="$style['mar']" space="20px" justify="center">
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
  </z-row>
  <z-row :class="$style['mar']" space="20px" justify="end">
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>
  <z-row :class="$style['mar']" space="20px" justify="space-between">
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
  </z-row>
  <z-row :class="$style['mar']" space="20px" justify="space-around">
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
  </z-row>
  <z-row :class="$style['mar']" space="20px" justify="space-evenly">
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col span="6" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>
</template>
```

:::

## 响应式布局

<ClientOnly>
  <z-row :class="$style['mar']" space="20px">
    <z-col xs="8" sm="6" md="4" lg="3" xl="1" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col xs="4" sm="6" md="8" lg="9" xl="11" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col xs="4" sm="6" md="8" lg="9" xl="11" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col xs="8" sm="6" md="4" lg="3" xl="1" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>
</ClientOnly>

::: details 展开/关闭代码

```vue
<template>
  <z-row :class="$style['mar']" space="20px">
    <z-col xs="8" sm="6" md="4" lg="3" xl="1" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col xs="4" sm="6" md="8" lg="9" xl="11" :class="$style['gray-400']">&nbsp;</z-col>
    <z-col xs="4" sm="6" md="8" lg="9" xl="11" :class="$style['gray-300']">&nbsp;</z-col>
    <z-col xs="8" sm="6" md="4" lg="3" xl="1" :class="$style['gray-400']">&nbsp;</z-col>
  </z-row>
</template>
```

:::

## Row API

<table :class="$style['api-table']">
<tr>
  <th>属性名</th>
  <th>说明</th>
  <th>类型</th>
  <th>默认值</th>
  <th>是否必填</th>
</tr>

<tr>
  <td>space</td>
  <td>栅格间隔</td>
  <td>string|number</td>
  <td>0</td>
  <td>否</td>
</tr>
<tr>
  <td>justify</td>
  <td>flex 布局下的水平排列方式</td>
  <td>与justify-content一致</td>
  <td>start</td>
  <td>否</td>
</tr>
<tr>
  <td>align</td>
  <td>flex 布局下的垂直排列方式</td>
  <td>与align-items一致</td>
  <td>stretch</td>
  <td>否</td>
</tr>
</table>

## Row Slots

<table :class="$style['api-table']">
  <tr>
    <th>插槽名</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>default</td>
    <td>默认内容</td>
  </tr>
</table>

## Col API

<table :class="$style['api-table']">
<tr>
  <th>属性名</th>
  <th>说明</th>
  <th>类型</th>
  <th>默认值</th>
  <th>是否必填</th>
</tr>
<tr>
  <td>span</td>
  <td>栅格占据的列数</td>
  <td>number</td>
  <td>24</td>
  <td>否</td>
</tr>
<tr>
  <td>offset</td>
  <td>栅格左侧的间隔格数</td>
  <td>number</td>
  <td>0</td>
  <td>否</td>
</tr>

<tr>
  <td>push</td>
  <td>栅格向右移动格数</td>
  <td>number</td>
  <td>0</td>
  <td>否</td>
</tr>
<tr>
  <td>pull</td>
  <td>栅格向左移动格数</td>
  <td>number</td>
  <td>0</td>
  <td>否</td>
</tr>

<tr>
  <td>xs</td>
  <td>&lt;768px 响应式栅格数或者栅格属性对象</td>
  <td>number|object</td>
  <td>——</td>
  <td>否</td>
</tr>
<tr>
  <td>sm</td>
  <td>≥768px 响应式栅格数或者栅格属性对象</td>
  <td>number|object</td>
  <td>——</td>
  <td>否</td>
</tr>

<tr>
  <td>md</td>
  <td>≥992px 响应式栅格数或者栅格属性对象</td>
  <td>number|object</td>
  <td>——</td>
  <td>否</td>
</tr>
<tr>
  <td>lg</td>
  <td>≥1200px 响应式栅格数或者栅格属性对象</td>
  <td>number|object</td>
  <td>——</td>
  <td>否</td>
</tr>

<tr>
  <td>xl</td>
  <td>≥1920px 响应式栅格数或者栅格属性对象</td>
  <td>number|object</td>
  <td>——</td>
  <td>否</td>
</tr>
</table>

## Col Slots

<table :class="$style['api-table']">
  <tr>
    <th>插槽名</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>default</td>
    <td>默认内容</td>
  </tr>
</table>
