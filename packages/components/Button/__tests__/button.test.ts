import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import Button from '../ZButton.vue';

test('mount component', async () => {
  const wrapper = mount(Button, {
    slots: {
      default: 'hello',
    },
  });
  expect(wrapper.text()).toBe('hello');
  expect(wrapper.classes().join()).toMatch(/_z-button_|_z-button--primary_/);
});
