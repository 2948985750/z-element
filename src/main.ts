import { createApp, reactive, watchEffect } from 'vue';
import App from './App_test.vue';
const obj = { a: 1 };
createApp(App).provide('name', obj).mount('#app');
setTimeout(() => {
  obj.a = 10;
}, 1000);
