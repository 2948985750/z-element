<template>
  <footer :class="[$style['z-footer'], is($style['z-footer--flex'], props.flex)]">
    <slot></slot>
  </footer>
</template>

<script setup lang="ts">
import { is } from '../../utils/bem';
const props = withDefaults(defineProps<{ height?: string; flex?: boolean }>(), {
  height: '56px',
  flex: false,
});
</script>

<style module lang="postcss">
.z-footer {
  @apply px-2 h-14 w-full;
  height: v-bind('props.height');
  line-height: v-bind('props.height');
}

.z-footer--flex {
  @apply flex items-center;
}
</style>
