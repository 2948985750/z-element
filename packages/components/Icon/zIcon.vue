<template>
  <i :class="$style['z-icon']" :style="style">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { IconProps } from './icon';

const props = defineProps(IconProps);
const style = computed(() => ({
  fontSize: props.size ?? 'inherit',
  color: props.color ?? 'inherit',
}));
</script>

<style module lang="postcss">
.z-icon {
  @apply w-5 h-5 flex items-center px-1;
  & > * {
    @apply w-full h-full;
  }
}
</style>
