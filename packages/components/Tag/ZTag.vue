<template>
  <span
    v-if="status"
    ref="target"
    :class="[ $style[defTagClass], round, disable,
    defStyle($style, `${props.size}`, `${props.styleType}`, `${props.type}`)]"
    >
      <slot></slot>
      <template v-if="props.closable">
        <i :class="[closeable]"><Close @click="destroyComponent"/></i>
      </template>
  </span>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from 'vue'
import { TagProps } from './tag'
import { nameSpace } from '../../utils/bem';
import {
  Close
} from '@element-plus/icons-vue'

const status = ref(true)
/** 样式传参
 */
const props = defineProps(TagProps)
const block = nameSpace()
const defTagClass = 'z-tag'
const defStyle = ( style:any, ...classes: Array<string>) => {
  const contactArr = (...ss: Array<string>) => {
    return ss.map((s: string) => block.element( defTagClass, s))
  }
  return contactArr(...classes).map(Class => style[`${Class}`])
}

/** 样式定制
 * round 圆形化
 * disable 是否禁用
 */
const round = () => (props.round ? 'round' : '')
const disable = computed(() => props.disabled ? 'disabled' : '')
const closeable = computed(() => props.closable ? 'closable' : '')

/** 事件
 * destroyComponent 关闭并销毁组件，传递组件中的文本内容
 */
const target = ref(null)
const emits = defineEmits(['close'])
const destroyComponent = () => {
  emits('close', target.value?.innerText)
  status.value = false
}

</script>

<style module lang="postcss">
@import "./tag.css";
</style>

<style scoped lang="postcss">
.round{
  border-radius: theme(borderRadius.md);
}

.disabled{
  @apply border border-solid border-gray-100 bg-gray-50 text-gray-300;
  cursor: not-allowed;
}

.closable{
  @apply align-middle pl-1;
  width: theme(textIndent[3.5]);
  height: theme(textIndent[3.5]);
  > svg{
    @apply inline-block;
    width: inherit;
    height: inherit;
  }
}
</style>