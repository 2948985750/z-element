# Container 布局

通过基础的 24 分栏，迅速简便地创建布局。

::: tip
组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， `<z-container>`的直接子元素必须是后四个组件中的一个或多个。 四个子组件的父元素必须是一个 `<z-container>`
:::

<script setup lang="ts">
  import { zContainer, zHeader, zMain, zAside, zFooter } from "../../packages/components/Container"
</script>
<style lang="postcss" module>
  .container {
    @apply h-80;
  }
  .bg {
    @apply bg-success_light_5;
  }
  .bg-light {
    @apply bg-success_light_7;
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

## Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：
`<z-container>`：外层容器。 当子元素中包含 `<z-header>` 或 `<z-footer>` 时，全部子元素会垂直上下排列， 反之会水平左右排列。

- `<z-header>`：顶栏容器。
- `<z-aside>`：侧边栏容器。
- `<z-main>`：主要区域容器。
- `<z-footer>`：底栏容器。

## 常见页面布局

<ClientOnly>
  <z-container :class="$style['container']">
    <z-header :class="$style['bg']">Header</z-header>
    <z-main :class="$style['bg-light']">main</z-main>
    <z-footer :class="$style['bg']">footer</z-footer>
  </z-container>
</ClientOnly>

::: details 展开/折叠代码

```vue
<template>
  <z-container :class="$style['container']">
    <z-header :class="$style['bg']">Header</z-header>
    <z-main :class="$style['bg-light']">main</z-main>
    <z-footer :class="$style['bg']">footer</z-footer>
  </z-container>
</template>
```

:::

<ClientOnly>
  <z-container :class="$style['container']">
    <z-aside :class="$style['bg']" style="height: 100%; align-items:center">aside</z-aside>
    <z-main :class="$style['bg-light']" style="height: 100%; align-items:center">main</z-main>
  </z-container>
</ClientOnly>

::: details 展开/折叠代码

```vue
<template>
  <z-container :class="$style['container']">
    <z-aside :class="$style['bg']" style="height: 100%;">aside</z-aside>
    <z-main :class="$style['bg-light']" style="height: 100%;">main</z-main>
  </z-container>
</template>
```

:::

<ClientOnly>
  <z-container :class="$style['container']">
    <z-header :class="$style['bg']">Header</z-header>
    <z-container>
      <z-aside :class="$style['bg']" style="height: 100%;">aside</z-aside>
      <z-main :class="$style['bg-light']" style="height: 100%;">main</z-main>
    </z-container>
  </z-container>
</ClientOnly>

::: details 展开/折叠代码

```vue
<template>
  <z-container>
    <z-header>Header</z-header>
    <z-container>
      <z-aside>aside</z-aside>
      <z-main>main</z-main>
    </z-container>
  </z-container>
</template>
```

:::

<ClientOnly>
  <z-container :class="$style['container']">
    <z-aside :class="$style['bg']" style="height: 100%;">aside</z-aside>
    <z-container>
      <z-header :class="$style['bg']">Header</z-header>
      <z-main :class="$style['bg-light']" style="height: 100%;">main</z-main>
      <z-footer :class="$style['bg']">footer</z-footer>
    </z-container>
  </z-container>
</ClientOnly>

::: details 展开/折叠代码

```vue
<template>
  <z-container>
    <z-aside>aside</z-aside>
    <z-container>
      <z-header>Header</z-header>
      <z-main>main</z-main>
      <z-footer>footer</z-footer>
    </z-container>
  </z-container>
</template>
```

:::

## Container Attributes

<table :class="$style['api-table']">
<tr>
  <th>属性名</th>
  <th>说明</th>
  <th>类型</th>
  <th>默认值</th>
  <th>是否必填</th>
</tr>

<tr>
  <td>direction</td>
  <td>子元素的排列方向</td>
  <td>'row'|'column'</td>
  <td>子元素中有 z-header 或 z-footer 时为 column，否则为 row</td>
  <td>否</td>
</tr>
</table>

## Container Slots

<table :class="$style['api-table']">
<tr>
  <th>插槽名</th>
  <th>说明</th>
  <th>类型</th>
</tr>

<tr>
  <td>default</td>
  <td>默认插槽内容</td>
  <td>允许的值Container / Header / Aside / Main / Footer</td>
</tr>
</table>

## Header Attributes

<table :class="$style['api-table']">
<tr>
  <th>属性名</th>
  <th>说明</th>
  <th>类型</th>
  <th>默认值</th>
  <th>是否必填</th>
</tr>

<tr>
  <td>height</td>
  <td>header组件高度</td>
  <td>string</td>
  <td>60px</td>
  <td>否</td>

</tr>
</table>

## Header Slots

<table :class="$style['api-table']">
<tr>
  <th>插槽名</th>
  <th>说明</th>
  <th>类型</th>
</tr>

<tr>
  <td>default</td>
  <td>默认插槽内容</td>
  <td>任意值</td>
</tr>
</table>

## Aside Attributes

<table :class="$style['api-table']">
<tr>
  <th>属性名</th>
  <th>说明</th>
  <th>类型</th>
  <th>默认值</th>
  <th>是否必填</th>
</tr>

<tr>
  <td>width</td>
  <td>侧边栏宽度</td>
  <td>string</td>
  <td>300px</td>
  <td>否</td>
</tr>
</table>

## Aside Slots

<table :class="$style['api-table']">
<tr>
  <th>插槽名</th>
  <th>说明</th>
  <th>类型</th>
</tr>

<tr>
  <td>default</td>
  <td>默认插槽内容</td>
  <td>任意值</td>
</tr>
</table>

## Main Slots

<table :class="$style['api-table']">
<tr>
  <th>插槽名</th>
  <th>说明</th>
  <th>类型</th>
</tr>

<tr>
  <td>default</td>
  <td>默认插槽内容</td>
  <td>任意值</td>
</tr>
</table>

## Footer Attributes

<table :class="$style['api-table']">
<tr>
  <th>属性名</th>
  <th>说明</th>
  <th>类型</th>
  <th>默认值</th>
  <th>是否必填</th>

</tr>

<tr>
  <td>height</td>
  <td>footer组件高度</td>
  <td>string</td>
  <td>60px</td>
  <td>否</td>
</tr>
</table>

## Footer Slots

<table :class="$style['api-table']">
<tr>
  <th>插槽名</th>
  <th>说明</th>
  <th>类型</th>
</tr>

<tr>
  <td>default</td>
  <td>默认插槽内容</td>
  <td>任意值</td>
</tr>
</table>
