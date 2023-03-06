import { mount } from '@vue/test-utils';
import { it, expect } from 'vitest';
import { h } from 'vue';
import Icon from '../index.vue';
import { Check } from '@element-plus/icons-vue';
it('icon mount', async () => {
  const dom = mount(Icon, {
    slots: {
      default: h(Check),
    },
  });
  expect(dom.classes().join()).toBe('z-icon');
  expect(dom.find('i').find('svg').element.tagName).toBe('svg');
});
