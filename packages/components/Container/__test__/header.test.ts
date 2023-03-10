import { mount } from '@vue/test-utils';
import { it, expect } from 'vitest';
import ZHeader from '../ZHeader.vue';
import { nextTick } from 'vue';

it('header mount', async () => {
  const dom = mount(ZHeader, {
    slots: {
      default: 'header',
    },
  });

  expect(dom.text()).toBe('header');
});

it('header prop', async () => {
  const dom = mount(ZHeader, {
    props: {
      height: '20px',
      flex: true,
    },
  });
  expect(dom.classes()[1]).toMatch(/_z-header--flex_/g);
  // const el = dom.vm.$el;
  // await nextTick();
  // console.log(getComputedStyle(el));
  // expect(getComputedStyle(dom.element).height).toBe('20px'); // getComputedStyle好像是被阉割过的与浏览器环境下的行为不同
});
