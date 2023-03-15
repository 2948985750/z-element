import { mount } from '@vue/test-utils';
import { it, expect } from 'vitest';
import { h } from 'vue';
import Icon from '../icon.vue';
import { Check } from '@element-plus/icons-vue';
it('icon mount', async () => {
  const dom = mount(Icon, {
    slots: {
      default: h(Check),
    },
  });
  expect(dom.classes().join().includes('_z-icon_')).toBe(true);
});
