<template>
  <button :type="props.action" :disabled="props.disabled"
    :class="[block.element('button'), block.element('button', (props as any).type)]">
    <span :class="['z-button-slot', props.loading ? 'rotate' : '']">
      <slot name="icon">
        <component v-if="props.loading" :is="IconComponent"></component>
        <component v-else :is="props.icon"></component>
      </slot>
    </span>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { bemBlock } from "../../utils/bem";
import { ButtonProps } from './button';
import { Message } from '@element-plus/icons-vue'


const props = defineProps(ButtonProps)
const block = bemBlock('z')
console.log(props.icon);

const IconComponent = computed(() => props.loadingIcon ? props.loadingIcon : Message)
</script>

<style scoped lang="postcss">
@import "./button.css";
</style>
