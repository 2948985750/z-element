<template>
  <header :class="[$style['z-header'], is($style['z-header--flex'], (props as any).flex)]">
    <slot></slot>
  </header>
</template>

<script setup lang="ts">
import { is } from '../../utils/bem';

const props = withDefaults(
  defineProps<{
    height?: string;
  }>(),
  {
    height: '56px',
  }
);
</script>

<style module lang="postcss">
.z-header {
  @apply px-2 h-14 w-full;
  height: v-bind('props.height');
  line-height: v-bind('props.height');
}

.z-header--flex {
  @apply flex items-center;
}
</style>
