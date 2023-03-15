<template>
    <section :class="[$style['z-container'], block.is($style['z-column'], isColumn)]">
        <slot></slot>
    </section>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
import type { Component, VNode, } from "vue"
import { nameSpace } from '../../utils/bem';
const block = nameSpace()
const slots = useSlots()
const props = defineProps<{ direction?: 'row' | 'column' }>()

const isColumn = computed(() => {
    if (props.direction === "row") {
        return false
    }
    else if (props.direction === "column") {
        return true
    }

    if (slots && slots.default) {
        const slotArr: VNode[] = slots.default();
        return slotArr.some(vNode => {
            const tagName = (vNode.type as any).__name;
            return tagName === 'ZHeader' || tagName === 'ZFooter'
        })
    }
    else {
        return false
    }
})
</script>

<style lang="postcss" module>
.z-container {
    @apply box-border flex flex-auto flex-row;

    >* {
        @apply box-border
    }
}

.z-column {
    @apply flex-col
}
</style>