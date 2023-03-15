<template>
    <footer :class="[$style['z-footer'], block.is($style['z-footer--flex'], props.flex)]">
        <slot></slot>
    </footer>
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
.z-footer {
    @apply px-2 h-14;
    height: v-bind('props.height');
    line-height: v-bind('props.height')
}

.z-footer--flex {
    @apply flex items-center;
}
</style>