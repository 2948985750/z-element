<template>
  <section :class="[$style['z-container'], block.is($style['z-column'], isColumn!)]">
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
import type { VNode } from 'vue';
import { nameSpace } from '../../utils/bem';
const block = nameSpace();
const slots = useSlots();
const props = withDefaults(defineProps<{ direction?: 'row' | 'column' }>(), { direction: 'row' });

// console.log(slots?.default());

const isColumn = computed(() => {
  if (slots && slots.default) {
    const slotArr: VNode[] = slots.default();
    const reg = /\/(\w+)\.vue$/;
    return slotArr.some((vNode) => {
      const fileName = (vNode.type as any).__file as string;
      const matchName = fileName?.match(reg)?.[1];
      return matchName === 'zHeader' || matchName === 'zFooter';
    });
  }
  if (props.direction === 'row') {
    return false;
  } else if (props.direction === 'column') {
    return true;
  }
});
</script>

<style lang="postcss" module>
.z-container {
  @apply box-border flex flex-auto flex-row w-full;

  > * {
    @apply box-border;
  }
}

.z-column {
  @apply flex-col;
}
</style>
