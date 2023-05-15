<template>
  <span class="arrow" ref="arrowRef" :style="arrowStyle"> </span>
</template>

<script lang="ts">
import { defineComponent, inject, onBeforeUnmount, watch } from 'vue';
import { POPPER_CONTENT_INJECTION_KEY } from './constants';
import { ArrowProps } from './arrow';

export default defineComponent({
  name: '',
  props: {
    ...ArrowProps,
  },
  setup(props, ctx) {
    const { arrowOffset, arrowRef, arrowStyle } = inject(POPPER_CONTENT_INJECTION_KEY, undefined)!;
    watch(
      () => props.arrowOffset,
      (val) => {
        arrowOffset.value = val;
      }
    );
    onBeforeUnmount(() => {
      arrowRef.value = undefined;
    });

    ctx.expose({
      arrowRef,
    });
    return {
      arrowStyle,
    };
  },
});
</script>

<style scoped lang="postcss">
.arrow {
  @apply absolute w-3 h-3 z-0;

  &::before {
    @apply absolute w-3 h-3 z-0 rotate-45 box-border;
  }
}
</style>
