import { mount } from '@vue/test-utils';
import { expect, it } from 'vitest';
import Button from '../button.vue';

it('mount component', async () => {
  const wrapper = mount(() => Button, {});

  expect(wrapper.text()).toBe(0);
});
