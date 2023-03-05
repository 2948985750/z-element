import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import Button from '../index.vue';
import type { DefineComponent } from 'vue';

test('mount component', async () => {
  const wrapper = mount<any>(Button, {
    slots: {
      default: 'hello',
    },
  });
  expect(wrapper.text()).toBe('hello');
  expect(wrapper.classes()).toStrictEqual(['z-button', 'z-button--plain']);
});

test('');
