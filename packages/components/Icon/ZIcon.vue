<template>
    <i :class="$style['z-icon']" :style="style">
        <slot></slot>
    </i>
</template>

<script lang="ts" setup>
import { useSlots, computed } from 'vue';
import { nameSpace } from '../../utils/bem';
import { IconProps } from './icon';


const block = nameSpace()
const slots = useSlots()
const props = defineProps(IconProps)


const style = computed(() => ({
    fontSize: props.size ?? 'inherit',
    color: props.color ?? 'inherit'
}))
</script>

<style module lang="postcss">
@import './icon.css'
</style>