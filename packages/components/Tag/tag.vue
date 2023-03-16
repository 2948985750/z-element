<template>
  <span ref="target" v-if="!shouldDestroy" :class="[$style[defTagClass], round, disable,
  defStyle($style, `${props.size}`, `${props.styleType}`, `${props.type}`)]">
    <span v-show="slot || props.slot" :class="[defStyle($style, `preIcon`), 'pre-icon']">
      <i>
        <slot name="Icon"></slot>
      </i>
    </span>
    <slot></slot>
    <template v-if="props.closable">
      <i :class="[closeable]">
        <XCircleIcon @click="destroyComponent()" />
      </i>
    </template>
  </span>
</template>

<script setup lang="ts">

import { ref, computed, onMounted, useSlots, Ref } from 'vue'
import { TagProps } from './tag'
import { nameSpace } from '../../utils/bem';
import { XCircleIcon } from '@heroicons/vue/24/solid'

const target: Ref<HTMLElement> | Ref<null> = ref(null);
const shouldDestroy = ref(false)
/** 样式传参
 */
const props = defineProps(TagProps)
const block = nameSpace()
const defTagClass = 'z-tag'
const defStyle = (style: any, ...classes: Array<string>) => {
  const contactArr = (...ss: Array<string>) => {
    return ss.map((s: string) => block.element(defTagClass, s))
  }
  return contactArr(...classes).map(Class => style[`${Class}`])
}

// dom渲染后获取组件的样式
const theme = computed(() => {
  if (target.value !== null)
    return window.getComputedStyle(target.value, null)
  else
    return undefined
})


/** round 和 disable处理 (样式定制)
 * round 圆形化
 * disable 是否禁用
 */
const round = () => (props.round ? 'round' : '')
const disable = computed(() => props.disabled ? 'disabled' : '')
const closeable = computed(() => props.closable ? 'closable' : '')

/** closable 处理
 * destroyComponent 关闭并销毁组件，传递组件中的文本内容
 */
const emits = defineEmits(['close'])
const destroyComponent = () => {
  emits('close', target.value?.innerText)
  shouldDestroy.value = true
}

/** slots 处理
 * 1. 从组件内部添加 icon 图标
 * 2. 在标签名中声明图标
 */

const slot = computed(() => {
  if (useSlots()['Icon'] instanceof Function) {
    return true
  } else {
    return false
  }
})
</script>

<style module lang="postcss">
@import "./tag.css";
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

  >svg {
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
