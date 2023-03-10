<template>
  <button :type="props.action" :disabled="props.disabled"
    :class="[$style['z-button'], $style[`z-button--${props.type}`]]">
    <span :class="[$style['z-button-slot'], block.is($style['rotate'], props.loading)]">
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
import { nameSpace } from "../../utils/bem";
import { ButtonProps } from './button';
import { Message } from '@element-plus/icons-vue'


const props = defineProps(ButtonProps)
const block = nameSpace()

const IconComponent = computed(() => props.loadingIcon ? props.loadingIcon : Message)

</script>

<style module lang="postcss">
@import "./button.css";
</style>
