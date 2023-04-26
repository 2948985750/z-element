<template>
  <span
    ref="target"
    v-if="!shouldDestroy"
    :class="[
      $style[defTagClass],
      block.is('round', props.round),
      block.is('disabled', props.disabled),
      defClass($style, `${props.size}`, `${props.styleType}`, `${props.type}`),
    ]"
  >
    <span v-show="IconSlot || props.slot" :class="[defClass($style, `preIcon`), 'pre-icon']">
      <z-icon>
        <slot name="Icon"></slot>
      </z-icon>
    </span>
    <slot></slot>
    <template v-if="props.closable">
      <i :class="[block.is('closable', props.closable)]">
        <XCircleIcon @click="destroyComponent()" />
      </i>
    </template>
  </span>
</template>

<script setup lang="ts">
import ZIcon from '../Icon/icon.vue';

import { ref, computed, onMounted, useSlots, Ref } from 'vue';
import { TagProps } from './tag';
import { nameSpace, contactClass } from '../../utils/bem';
import { XCircleIcon } from '@heroicons/vue/24/solid';

const target: Ref<HTMLElement> | Ref<null> = ref(null);
const shouldDestroy = ref(false);

// 样式传参
const props = defineProps(TagProps);
const block = nameSpace();
const defTagClass = 'z-tag';
const defClass = (hashStyle: any, ...classes: string[]) => {
  return contactClass(defTagClass, ...classes).map((Class) => hashStyle[`${Class}`]);
};

// dom渲染后获取组件的样式
const theme = computed(() => {
  const element: Element | null = target!.value ?? null;
  if (element === null) {
    return undefined;
  } else {
    return window.getComputedStyle(element, null);
  }
});

/** closable 处理
 * destroyComponent 关闭并销毁组件，传递组件中的文本内容
 */
const emits = defineEmits(['close']);
const destroyComponent = () => {
  const element = target.value;
  emits('close', element?.innerText ?? null);
  shouldDestroy.value = true;
};

/** slots 处理
 * 1. 从组件内部添加 icon 图标
 * 2. 在标签名中声明图标
 */
const slot = useSlots();
const IconSlot = computed(() => {
  if (slot['Icon'] instanceof Function) {
    return true;
  } else {
    return false;
  }
});
</script>

<style module lang="postcss">
@import './tag.css';
</style>

<style scoped lang="postcss">
.round {
  @apply rounded-lg;
}

.disabled {
  @apply border border-solid border-gray-100 bg-gray-50 text-gray-300;
  cursor: not-allowed;
}

.closable {
  @apply align-middle pl-1 inline-block relative;
  color: v-bind('theme?.backgroundColor');
  width: v-bind('theme?.fontSize');
  height: v-bind('theme?.fontSize');

  > svg {
    @apply inline-block absolute;
    top: 50%;
    transform: translateY(-50%);
    width: inherit;
    height: inherit;
    stroke: v-bind('theme?.color');

    &:hover {
      fill: v-bind('theme?.color');
      stroke: none;
    }
  }
}
</style>
