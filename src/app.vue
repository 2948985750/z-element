<template>
  <div>
    <ZButton type="primary" loading>primary</ZButton>
    <ZButton type="success">success</ZButton>
    <ZButton type="info">info</ZButton>
    <ZButton type="warning">wraning</ZButton>
    <ZButton type="danger">danger</ZButton>
    <ZC>123546</ZC>
    <input type="text" v-model="r.a">
    <button @click="r.a++">a++</button>
    <ZForm :model="r" label-width="20" :rules="{ a: [{ trigger: '' }] }">
      <item>
      </item>
    </ZForm>
    <App />
  </div>
</template>

<script setup lang="ts">
import { inject, reactive } from 'vue'
import { ZButton } from '../packages/components/Button/index';
import ZC from '../packages/components/Cascader/cascader.vue';
import App from "./app_.vue"
import { ZForm } from "../packages/components/Form/form/index";
import item from '../packages/components/Form/form-item/form-item.vue'

const r = reactive({
  a: 1,
  b: 2,
  c: 3
})
const fn = () => {
  r.a = ++r.a
}
</script>
