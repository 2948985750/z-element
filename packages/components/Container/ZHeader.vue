<template>
    <header :class="[$style['z-header'], block.is($style['z-header--flex'], (props as any).flex)]">
        <slot></slot>
    </header>
</template>

<script setup lang="ts">
import { nameSpace } from '../../utils/bem';
import { HeaderProps } from "./Header"
const block = nameSpace()
const props = defineProps(HeaderProps)
</script>

<style module lang="postcss">
.z-header {
    @apply px-2 h-14;
    height: v-bind('props.height');
    line-height: v-bind('props.height')
}

.z-header--flex {
    @apply flex items-center;
}
</style>
