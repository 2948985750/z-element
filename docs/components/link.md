# Link 链接

文字超链接

<script setup lang='ts'>
  import zLink from '../../packages/components/Link';
  import zIcon from "../../packages/components/Icon"
  import { PencilSquareIcon, EyeIcon } from '@heroicons/vue/24/solid';

</script>
<style lang="postcss" module>
  .vp-doc a {
    font-weight: 500;
    text-decoration-style: dotted;
    transition: color .25s;
    &:hover {
      color: 'red'
    }
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

## 基础用法

<ClientOnly>
  <z-link type="default">link</z-link>
  <z-link type="primary">link</z-link>
  <z-link type="success">link</z-link>
  <z-link type="warning">link</z-link>
  <z-link type="danger">link</z-link>
  <z-link type="info">link</z-link>
</ClientOnly>

::: details 展开/关闭代码

```vue
<z-link type="default">link</z-link>
<z-link type="primary">link</z-link>
<z-link type="success">link</z-link>
<z-link type="warning">link</z-link>
<z-link type="danger">link</z-link>
<z-link type="info">link</z-link>
```

:::

## 禁用状态

文字链接不可用状态。
<ClientOnly>
<z-link disabled type="default">link</z-link>
<z-link disabled type="primary">link</z-link>
<z-link disabled type="success">link</z-link>
<z-link disabled type="warning">link</z-link>
<z-link disabled type="danger">link</z-link>
<z-link disabled type="info">link</z-link>
</ClientOnly>

::: details 展开/关闭代码

```vue
<z-link disabled type="default">link</z-link>
<z-link disabled type="primary">link</z-link>
<z-link disabled type="success">link</z-link>
<z-link disabled type="warning">link</z-link>
<z-link disabled type="danger">link</z-link>
<z-link disabled type="info">link</z-link>
```

:::

## 下划线

文字链接下划线。

<ClientOnly>
<z-link type="default">link</z-link>
<z-link underline="false" type="primary">link</z-link>
</ClientOnly>

::: details 展开/关闭代码

```vue
<template>
  <z-link type="default">link</z-link>
  <z-link underline="false" type="primary">link</z-link>
</template>
```

:::

## 图标

带图标的链接

::: tip
使用 icon 属性来为按钮添加图标。 您可以传递组件名称的字符串（提前注册）或组件本身是一个 SVG Vue 组件。
:::

<ClientOnly>
  <z-link :icon="PencilSquareIcon" type="default">link</z-link>
  <z-link type="primary">link<z-icon><EyeIcon /></z-icon></z-link>
</ClientOnly>

::: details 展开/关闭代码

```vue
<template>
  <z-link :icon="PencilSquareIcon" type="default">link</z-link>
  <z-link type="primary">
    link<z-icon><EyeIcon /></z-icon>
  </z-link>
</template>
```

:::

## Link API

<table :class="$style['api-table']">
<tr>
  <th>属性名</th>
  <th>说明</th>
  <th>类型</th>
  <th>默认值</th>
  <th>是否必填</th>
</tr>

<tr>
  <td>type</td>
  <td>类型</td>
  <td>'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'</td>
  <td>default</td>
  <td>否</td>
</tr>

<tr>
  <td>underline</td>
  <td>是否在hover时显示下划线</td>
  <td>boolean</td>
  <td>true</td>
  <td>否</td>
</tr>

<tr>
  <td>disabled</td>
  <td>是否禁用状态</td>
  <td>boolean</td>
  <td>false</td>
  <td>否</td>
</tr>

<tr>
  <td>href</td>
  <td>原生 href 属性</td>
  <td>string</td>
  <td>—</td>
  <td>否</td>
</tr>

<tr>
  <td>icon</td>
  <td>图标组件</td>
  <td>string|Component</td>
  <td>—</td>
  <td>否</td>
</tr>
</table>

## Link Slots

<table :class="$style['api-table']">
  <tr>
    <th>插槽名</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>default</td>
    <td>默认内容</td>
  </tr>
  <tr>
    <td>icon</td>
    <td>自定义图标组件</td>
  </tr>
</table>
