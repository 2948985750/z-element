<<<<<<< HEAD
import { createApp } from 'vue';

import App from './app.vue';
createApp(App).mount('#app');
=======
import { createApp, reactive, watchEffect } from 'vue';
import App from './App_test.vue';
const obj = { a: 1 };
createApp(App).provide('name', obj).mount('#app');
setTimeout(() => {
  obj.a = 10;
}, 1000);
>>>>>>> 9698571c8c9b5123e87c9033553a99e99c56fdff
