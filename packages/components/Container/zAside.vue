<template>
    <aside :class="[$style['z-aside']]">
        <slot></slot>
    </aside>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ width?: string }>(), {
    width: '256px'
})
</script>

<style module lang="postcss">
.z-aside {
    @apply flex-grow flex-shrink basis-3/12 px-2 py-1 max-w-full;
    width: v-bind('props.width');
}
</style>