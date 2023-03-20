<template>
  <span
    :class="[
      $style[defInput],
      block.is('round', props.round),
      block.is('full', props.full),
      block.is(`col-${props.col}`, Boolean(props.col)),
      defClass($style, `${props.type}`),
    ]"
  >
    <slot name="prefix"></slot>
    <input
      v-model="textValue"
      ref="inputTarget"
      :class="['input', props.size, props.type, block.is('icon', props.clearIcon, Boolean(textValue))]"
      :type="props.type"
      name=""
      id=""
    />
    <template v-if="Boolean(props.clearIcon)">
      <span :class="block.is('clear-icon', props.clearIcon)">
        <XCircleIcon @click="clearText()" />
      </span>
    </template>
    <template v-if="Boolean(props.maxLen)">
      <span>{{ wordCount }}</span>
    </template>
    <slot name="suffix"></slot>
  </span>
</template>

<script setup lang="ts">
import { XCircleIcon } from '@heroicons/vue/24/solid';

import { ref, computed } from 'vue';
import { nameSpace, contactClass } from '../../utils/bem';
import { InputProps } from './input';

const props = defineProps(InputProps);
const textValue = ref('');
const inputTarget = ref(null);
// 样式传参
const block = nameSpace();
const defInput = 'z-input';
const defClass = (hashStyle: any, ...classes: Array<string>) => {
  return contactClass(defInput, ...classes).map((Class) => hashStyle[`${Class}`]);
};

// 清空文本
const clearText = () => {
  textValue.value = '';
};

// 获取输入框的样式
const inputTheme = computed(() => {
  const element: Element | null = inputTarget!.value ?? null;
  if (element === null) {
    return undefined;
  } else {
    return window.getComputedStyle(element, null);
  }
});

// 限制字数
const wordCount = computed(() => {
  const textLen = textValue.value.length;
  const total = props.maxLen;
  return `${textLen}/${total}`;
});
</script>

<style module lang="postcss">
@import './css/input_hash.css';
</style>

<style scoped lang="postcss">
@import './css/input_normal.css';

.full {
  @apply w-full;
}

.round {
  @apply rounded truncate;
}

.icon {
  ~ .clear-icon {
    @apply opacity-100;
  }
}

.clear-icon {
  /* icon 大小 根据输入框type 的line-height 来决定 */
  @apply inline-block relative w-5 opacity-0;
  height: v-bind('inputTheme?.height');
  padding: v-bind('inputTheme?.padding') 0;
  vertical-align: middle;
  > svg {
    @apply absolute fill-gray-600;
    width: v-bind('inputTheme?.height');
    height: v-bind('inputTheme?.height');
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
