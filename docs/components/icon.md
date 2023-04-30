# Icon 图标

z-ui 提供了一套常用的图标集合。

<script setup lang="ts">
import zButton from "../../packages/components/Button";
import zIcon from "../../packages/components/Icon"
import { TrashIcon, PencilIcon, ShareIcon, MagnifyingGlassIcon, ArrowUpIcon } from '@heroicons/vue/24/solid';
</script>

<style lang="postcss">
  .flex-box {
    @apply flex justify-around h-6;
    > div {
      @apply basis-1/6;
    }
  }
</style>

## 安装

```shell
  pnpm add @heroicons/vue
```

::: tip
你可以选择任意一个图标库并不拘泥于某个库，使用时将图标组件作为默认插槽传递给`z-icon`组件即可。
:::

## 基础用法

`z-icon`的宽高默认是自适应的所以你需要设定它
<ClientOnly>

<div class="flex-box">
  <div>
  <z-icon><TrashIcon /></z-icon>
  </div>
  <div>
  <z-icon><TrashIcon /></z-icon>
  </div>
  <div>
  <z-icon><TrashIcon /></z-icon>
  </div>
  <div>
  <z-icon><TrashIcon /></z-icon>
  </div>
  <div>
  <z-icon><TrashIcon /></z-icon>
  </div>
  <div>
  <z-icon><TrashIcon /></z-icon>
  </div>
</div>
</ClientOnly>

::: details 展开/关闭代码

```vue
<template>
  <div class="flex-box">
    <div>
      <z-icon><TrashIcon /></z-icon>
    </div>
    <div>
      <z-icon><TrashIcon /></z-icon>
    </div>
    <div>
      <z-icon><TrashIcon /></z-icon>
    </div>
    <div>
      <z-icon><TrashIcon /></z-icon>
    </div>
    <div>
      <z-icon><TrashIcon /></z-icon>
    </div>
    <div>
      <z-icon><TrashIcon /></z-icon>
    </div>
  </div>
</template>

<style lang="postcss">
.flex-box {
  @apply flex justify-around h-6;
  > div {
    @apply basis-1/6;
  }
}
</style>
```

:::

## 图标集合
