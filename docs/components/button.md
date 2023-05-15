# Button 按钮

常用的操作按钮。

## 基础用法

使用 type、round 来定义按钮的样式。

<script setup lang="ts">
import zButton from "../../packages/components/Button";
import zIcon from "../../packages/components/Icon"
import { TrashIcon, PencilIcon, ShareIcon, MagnifyingGlassIcon, ArrowUpIcon } from '@heroicons/vue/24/solid';
</script>
<style lang="postcss" module>
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

  .icon {
    @apply w-4 h-4;
  }
</style>

<ClientOnly>
<div :class="$style['btn-context']">
  <z-button>primary</z-button>
  <z-button type="plain">plain</z-button>
  <z-button type="success">success</z-button>
  <z-button type="info">info</z-button>
  <z-button type="warning">warning</z-button>
  <z-button type="danger">danger</z-button>
</div>

<div :class="$style['btn-context']">
  <z-button round>primary</z-button>
  <z-button type="plain" round>plain</z-button>
  <z-button type="success" round>success</z-button>
  <z-button type="info" round>info</z-button>
  <z-button type="warning" round>warning</z-button>
  <z-button type="danger" round>danger</z-button>
</div>
</ClientOnly>

::: details 展开/关闭代码

```vue
<template>
  <z-button>primary</z-button>
  <z-button type="success">success</z-button>
  <z-button type="info">info</z-button>
  <z-button type="warning">warning</z-button>
  <z-button type="danger">danger</z-button>

  <z-button round>primary</z-button>
  <z-button type="success" round>success</z-button>
  <z-button type="info" round>info</z-button>
  <z-button type="warning" round>warning</z-button>
  <z-button type="danger" round>danger</z-button>
</template>
```

:::

## 禁用状态

你可以使用 disabled 属性来定义按钮是否被禁用。

使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。

<ClientOnly>
  <div :class="$style['btn-context']">
    <z-button disabled >primary</z-button>
    <z-button disabled type="plain">plain</z-button>
    <z-button disabled type="success">success</z-button>
    <z-button disabled type="info">info</z-button>
    <z-button disabled type="warning">warning</z-button>
    <z-button disabled type="danger">danger</z-button>
  </div>

  <div :class="$style['btn-context']">
    <z-button disabled round>primary</z-button>
    <z-button disabled type="plain">plain</z-button>
    <z-button disabled type="success" round>success</z-button>
    <z-button disabled type="info" round>info</z-button>
    <z-button disabled type="warning" round>warning</z-button>
    <z-button disabled type="danger" round>danger</z-button>
  </div>
</ClientOnly>

::: details 展开/关闭代码

```vue
<template>
  <z-button disabled>primary</z-button>
  <z-button disabled type="plain">plain</z-button>
  <z-button disabled type="success">success</z-button>
  <z-button disabled type="info">info</z-button>
  <z-button disabled type="warning">warning</z-button>
  <z-button disabled type="danger">danger</z-button>

  <z-button disabled round>primary </z-button>
  <z-button disabled round type="plain">plain</z-button>
  <z-button disabled round type="success">success</z-button>
  <z-button disabled round type="info">info</z-button>
  <z-button disabled round type="warning">warning</z-button>
  <z-button disabled round type="danger">danger</z-button>
</template>
```

:::

## 图标按钮

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

使用 icon 属性来为按钮添加图标。 您可以在我们的 Icon 组件中找到所需图标。 通过向右方添加 i 标签来添加图标， 你也可以使用自定义图标。

<ClientOnly>
  <div :class="$style['btn-context']">
    <z-button :icon="TrashIcon"></z-button>
    <z-button :icon="PencilIcon"></z-button>
    <z-button :icon="ShareIcon"></z-button>
    <z-button :icon="MagnifyingGlassIcon">搜索</z-button>
    <z-button>
      上传
      <template #right>
        <z-icon><ArrowUpIcon/></z-icon>
      </template>
    </z-button>
  </div>
</ClientOnly>

::: details 展开/关闭代码

```vue
<template>
  <z-button :icon="TrashIcon"></z-button>
  <z-button :icon="PencilIcon"></z-button>
  <z-button :icon="ShareIcon"></z-button>
  <z-button :icon="MagnifyingGlassIcon">搜索</z-button>
  <z-button>
    上传
    <template #right>
      <z-icon><ArrowUpIcon /></z-icon>
    </template>
  </z-button>
</template>
```

:::

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 size 属性额外配置尺寸，可使用 large 和 small 两种值，默认值是 default。

<ClientOnly>
<div :class="$style['btn-context']">
  <z-button size="large">large</z-button>
  <z-button size="default" type="plain">default</z-button>
  <z-button size="small" type="success">small</z-button>
  <z-button size="large" :icon="TrashIcon">large</z-button>
  <z-button size="default" :icon="PencilIcon">default</z-button>
  <z-button size="small" :icon="ShareIcon">small</z-button>
</div>

<div :class="$style['btn-context']">
  <z-button size="large" round>large</z-button>
  <z-button size="default" round>default</z-button>
  <z-button size="small" type="success" round>small</z-button>
  <z-button size="large" type="info" round :icon="TrashIcon">large</z-button>
  <z-button size="default" type="warning" round :icon="PencilIcon">default</z-button>
  <z-button size="small" type="danger" round :icon="ShareIcon">small</z-button>
</div>
</ClientOnly>

::: details 展开/关闭代码

```vue
<template>
  <z-button size="large">large</z-button>
  <z-button size="default" type="plain">default</z-button>
  <z-button size="small" type="success">small</z-button>
  <z-button size="large" :icon="TrashIcon">large</z-button>
  <z-button size="default" :icon="PencilIcon">default</z-button>
  <z-button size="small" :icon="ShareIcon">small</z-button>

  <z-button size="large" round>large</z-button>
  <z-button size="default" round>default</z-button>
  <z-button size="small" type="success" round>small</z-button>
  <z-button size="large" type="info" round :icon="TrashIcon">large</z-button>
  <z-button size="default" type="warning" round :icon="PencilIcon">default</z-button>
  <z-button size="small" type="danger" round :icon="ShareIcon">small</z-button>
</tempalte>
```

:::

## button attributes

<table :class="$style['api-table']">
<tr>
  <th>属性名</th>
  <th>说明</th>
  <th>类型</th>
  <th>默认值</th>
  <th>是否必填</th>
</tr>
<tr>
  <td>size</td>
  <td>尺寸</td>
  <td>'large'| 'default'| 'small'</td>
  <td>default</td>
  <td>否</td>
</tr>
<tr>
  <td>type</td>
  <td>类型</td>
  <td>'primary'|'success'|'warning'|'danger'|'info'|'plain'</td>
  <td>primary</td>
  <td>否</td>
</tr>
<tr>
  <td>round</td>
  <td>是否为圆角按钮</td>
  <td>boolean</td>
  <td>false</td>
  <td>否</td>
</tr>
<tr>
  <td>loading</td>
  <td>是否为加载状态</td>
  <td>boolean</td>
  <td>false</td>
  <td>否</td>
</tr>
<tr>
  <td>disabled</td>
  <td>按钮是否为禁用状态</td>
  <td>boolean</td>
  <td>false</td>
  <td>否</td>
</tr>
<tr>
  <td>icon</td>
  <td>图标组件</td>
  <td>string/Component</td>
  <td>——</td>
  <td>否</td>
</tr>
</table>

## button slots

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
    <td>loading</td>
    <td>加载中图标</td>
  </tr>
  <tr>
    <td>icon</td>
    <td>图标插槽</td>
  </tr>
</table>

## Button Exposes

<table :class="$style['api-table']">
  <tr>
    <th>属性名</th>
    <th>说明</th>
    <th>类型</th>
  </tr>
  <tr>
    <td>ref</td>
    <td>按钮 html 元素ref引用</td>
    <td>object</td>
  </tr>
  <tr>
    <td>size</td>
    <td>按钮尺寸</td>
    <td>object</td>
  </tr>
  <tr>
    <td>type</td>
    <td>按钮类型</td>
    <td>object</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>按钮禁用状态(true)</td>
    <td>object</td>
  </tr>
</table>
