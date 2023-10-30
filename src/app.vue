<template>
  <zForm :rules="rules" :model="model" ref="form">
    <zFormItem prop="a.a" label="账号">
      <zInput v-model.number="model.a.a"></zInput>
    </zFormItem>
    <zFormItem prop="b.b" label="账号">
      <zInput v-model.number="model.b.b"></zInput>
    </zFormItem>
    <zFormItem label="爱好" prop="c.c">
      <zCheckbox
        :options="checkOpt"
        v-model="model.c.c"
        @change="
          (val) => {
            console.log(val);
          }
        "
      ></zCheckbox>
    </zFormItem>
    <zFormItem label="单选" prop="d.d">
      <zRadio
        :options="radioOpt"
        v-model="model.d.d"
        name="user"
        @change="
          (e) => {
            console.log(e);
          }
        "
      ></zRadio>
    </zFormItem>
  </zForm>
  <!-- <zInput type="checkbox"></zInput> -->
</template>

<script setup lang="ts">
import { inject, reactive, watchEffect, ref, computed, nextTick, onMounted } from 'vue';
import { zInput, zButton, zIcon, zForm, zFormItem, zList, zCheckbox, zRadio } from '../packages/components';
import type { Rules, FormInstance, CheckBoxOptions, RadioOptions } from '../packages/components';
import type { Arrayable } from 'vitest';

const model = reactive({
  a: { a: '' },
  b: { b: '' },
  c: { c: [] },
  d: { d: '' },
});

const rules = reactive<Record<string, Arrayable<Rules>>>({
  a: [
    {
      type: 'number',
      trigger: 'blur',
      message: '必须是数字',
    },
    {
      type: 'number',
      required: true,
      trigger: 'blur',
      message: '这是必填项',
    },
  ],
  b: {
    // type: 'any',
    type: 'number',
    required: true,
  },
  c: {
    trigger: 'change',
    type: 'array',
    required: true,
    message: '必填项',
  },
  d: {
    type: 'string',
    required: true,
    message: '必填项',
  },
});
const form = ref<FormInstance>();

onMounted(() => {
  form.value?.validateField(['a.a', 'b.b', 'c.c', 'd.d']);
});

const checkOpt = ref<CheckBoxOptions>([
  {
    label: '选项1',
    key: '1',
  },
  {
    label: '选项2',
    key: '2',
    // disabled: true,
  },
]);

const radioOpt = ref<RadioOptions>([
  {
    label: '单选1',
    key: '1',
  },
  {
    label: '单选2',
    key: '2',
    // disabled: true,
  },
]);

interface DataType {
  header: string;
  content: string;
  footer: string;
  key: string;
}

const data = ref([
  { header: 'header', content: 'content', footer: 'footer', key: '1' },
  { header: 'header1', content: 'content1', footer: 'footer1', key: '2' },
  { header: 'header2', content: 'content2', footer: 'footer2', key: '3' },
  { header: 'header3', content: 'content3', footer: 'footer3', key: '4' },
  { header: 'header4', content: 'content4', footer: 'footer4', key: '5' },
  { header: 'header5', content: 'content5', footer: 'footer5', key: '6' },
  { header: 'header6', content: 'content6', footer: 'footer6', key: '7' },
  { header: 'header7', content: 'content7', footer: 'footer7', key: '7' },
  { header: 'header8', content: 'content8', footer: 'footer8', key: '8' },
  { header: 'header9', content: 'content9', footer: 'footer9', key: '9' },
  { header: 'header10', content: 'content10', footer: 'footer10', key: '10' },
  { header: 'header11', content: 'contet11', footer: 'foote11', key: '11' },
  { header: 'header12', content: 'content12', footer: 'footer12', key: '12' },
  { header: 'header13', content: 'content13', footer: 'footer13', key: '13' },
  { header: 'header14', content: 'content14', footer: 'footer14', key: '14' },
  { header: 'header15', content: 'content15', footer: 'footer15', key: '15' },
  { header: 'header16', content: 'content16', footer: 'footer16', key: '16' },
  { header: 'header17', content: 'content17', footer: 'footer17', key: '17' },
  { header: 'header18', content: 'content18', footer: 'footer18', key: '18' },
]);

// setTimeout(() => {
//   data.value
//     .push
//     // {
//     //   header: 'header',
//     //   content: 'content',
//     //   footer: 'footer',
//     //   key: '1',
//     //   url: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.ZkoPhpKfJwsvGmpm8RsragHaFp&w=286&h=218&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
//     // }
//     // { header: 'header1', content: 'content1', footer: 'footer1', key: '2' },
//     // { header: 'header2', content: 'content2', footer: 'footer2', key: '3' },
//     // { header: 'header3', content: 'content3', footer: 'footer3', key: '4' },
//     // { header: 'header4', content: 'content4', footer: 'footer4', key: '5' },
//     // { header: 'header5', content: 'content5', footer: 'footer5', key: '6' },
//     // { header: 'header6', content: 'content6', footer: 'footer6', key: '7' },
//     // { header: 'header7', content: 'content7', footer: 'footer7', key: '7' },
//     // { header: 'header8', content: 'content8', footer: 'footer8', key: '8' },
//     // { header: 'header9', content: 'content9', footer: 'footer9', key: '9' },
//     // { header: 'header10', content: 'content10', footer: 'footer10', key: '10' },
//     // { header: 'header11', content: 'contet11', footer: 'foote11', key: '11' },
//     // { header: 'header12', content: 'content12', footer: 'footer12', key: '12' },
//     // { header: 'header13', content: 'content13', footer: 'footer13', key: '13' },
//     // { header: 'header14', content: 'content14', footer: 'footer14', key: '14' },
//     // { header: 'header15', content: 'content15', footer: 'footer15', key: '15' },
//     // { header: 'header16', content: 'content16', footer: 'footer16', key: '16' },
//     // { header: 'header17', content: 'content17', footer: 'footer17', key: '17' },
//     // { header: 'header18', content: 'content18', footer: 'footer18', key: '18' }
//     ();
// }, 5000);
</script>

<style lang="postcss" module>
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
