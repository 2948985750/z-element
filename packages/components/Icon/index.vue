<template>
    <i :class="[block.element('icon')]" :style="style">
        <slot></slot>
    </i>
</template>

<script lang="ts" setup>
import { useSlots, defineProps, computed } from 'vue';
import { bemBlock } from '../../utils/bem';
import { IconProps } from './icon';


const block = bemBlock('z')
const slots = useSlots()
const props = defineProps(IconProps)


const style = computed(() => ({
    fontSize: props.size ?? 'inherit',
    color: props.color ?? 'inherit'
}))
</script>

<style scoped lang="postcss">
@import './icon.css'
</style>