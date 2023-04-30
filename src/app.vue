<template>
  <z-input :autosize="{ minRows: 1, maxRows: 4 }" v-model="val" />
  <p @click="fn">{{ refs.a }}</p>
</template>

<script setup lang="ts">
import { inject, reactive, watchEffect, ref, computed, nextTick } from 'vue';
import zButton from '../packages/components/Button';
import zC from '../packages/components/Cascader/cascader.vue';
import { zForm, zFormItem } from '../packages/components/Form';
import { zRow, zCol } from '../packages/components/Layout/';
import { Rule } from 'async-validator';
import { FormProps } from '../packages/components/Form/form/form';
import { FormItemContext } from '../packages/components/Form/context';
import { FormContext } from '../packages/components/Form/context';
import zInput from '../packages/components/Input/index';
import { zContainer, zHeader, zAside, zMain, zFooter } from '../packages/components/Container';
import zLink from '../packages/components/Link/index';
import { AcademicCapIcon, PencilSquareIcon, EyeIcon } from '@heroicons/vue/24/solid';
import { watch } from 'fs';
// import { AcademicCapIcon } from '@heroicons/vue/24/solid';
const val = ref('');
const space = ref('20px');

const n = ref('');
watchEffect(() => {
  console.log(space.value);
});

let refs = reactive({
  a: 1,
});

const fn = () => {
  refs = reactive({
    a: 2,
  });
};

let a: any;
</script>

<style lang="postcss" module>
.c {
  border: 1px solid red;
  width: calc(25% + v-bind(a));
  color: calc(20% + v-bind(n));
}
.gray {
  @apply bg-slate-500;
}

.gray-400 {
  @apply bg-slate-400;
}

.gray-300 {
  @apply bg-slate-300;
}

.mar {
  @apply my-3;
}
</style>
