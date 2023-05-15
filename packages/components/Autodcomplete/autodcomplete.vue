<template></template>

<script setup lang="ts">
import { AutodcompleteProps, AutodcompleteEvent } from './autodcomplete';
import zInput from '../Input/zInput.vue';
const props = defineProps(AutodcompleteProps);
const emits = defineEmits(AutodcompleteEvent);
</script>

<style lang="postcss" module>
@import './auto.css';
</style>
