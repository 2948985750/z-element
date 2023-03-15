<template>
    <slot></slot>
</template>

<script setup lang="ts">
import validator from 'async-validator';
import { inject, watchEffect } from 'vue';
import { formContextKey } from '../key';
import { FormItemProps } from './form-item';

const props = defineProps(FormItemProps);
const val = inject(formContextKey);
const validate = new validator(val?.rules as any);

</script>

<style module lang="postcss"></style>
