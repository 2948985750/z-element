<template>
    <header :class="[$style['z-header'], block.is($style['z-header--flex'], props.flex)]">
        <slot></slot>
    </header>
</template>

<script setup lang="ts">
import { nameSpace } from '../../utils/bem';
const block = nameSpace()
const props = withDefaults(defineProps<{ height?: string, flex?: boolean }>(), {
    height: '56px',
    flex: false
})
</script>

<style module lang="postcss">
.z-header {
    height: v-bind('props.height');
    @apply px-2 h-14;
    line-height: v-bind('props.height')
}

.z-header--flex {
    @apply flex items-center;
}
</style>