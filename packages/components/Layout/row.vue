<template>
  <div :class="[$style['z-row']]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, provide, reactive, toRefs } from 'vue';
import { rowProps, layoutInjectKey } from './row';

const props = defineProps(rowProps);
const ctx = reactive({
  ...toRefs(props),
});
provide(layoutInjectKey, ctx);
</script>

<style module lang="postcss">
.z-row {
  @apply flex flex-wrap box-border w-full;
  justify-content: v-bind('props.justify');
  align-items: v-bind('props.align');
}
</style>
