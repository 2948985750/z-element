<template>
    <div :class="[$style['z-row']]">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

import { RowProps } from './row';
import { nameSpace } from '../../utils/bem';

const block = nameSpace();
const props = defineProps(RowProps);
const space = props.space / 2 + 'px'
</script>

<style module lang="postcss">
.z-row {
    @apply flex flex-wrap;
    justify-content: v-bind('props.justify');
    align-items: v-bind('props.align');

    >* {
        @apply box-border;
        margin-left: v-bind('space');
        margin-right: v-bind('space');
    }
}
</style>