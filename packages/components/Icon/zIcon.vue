<template>
  <i :class="$style['z-icon']" :style="style">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import { useSlots, computed } from 'vue';
import { nameSpace } from '../../utils/bem';
import { IconProps } from './icon';

const props = defineProps(IconProps);
const slots = useSlots();
const style = computed(() => ({
  fontSize: props.size ?? 'inherit',
  color: props.color ?? 'inherit',
}));
</script>

<style module lang="postcss">
.z-icon {
  @apply w-full h-full flex items-center px-1;
  > svg {
    @apply w-full h-full;
    font-size: 10px;
  }
}
</style>
