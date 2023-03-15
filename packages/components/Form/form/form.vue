<template>
    <form>
        <slot></slot>
    </form>
</template>

<script setup lang="ts">
import { FormProps, FormEmits } from "./form";
import type { FormContext } from '../context';
import { formContextKey } from "../key"
import { inject, provide, reactive, toRefs, ref } from "vue";
const props = defineProps(FormProps);
const emit = defineEmits(FormEmits);

const ctx = reactive({
    ...toRefs(props),
    emit,
})

provide(formContextKey, ctx)
</script>

<style module lang="postcss"></style>