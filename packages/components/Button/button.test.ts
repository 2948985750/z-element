import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Button from './zButton.vue';

describe('zButton.vue', () => {
  test('mount component', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'hello',
      },
    });
    expect(wrapper.text()).toBe('hello');
    expect(wrapper.classes().join()).toMatch(/_z-button_./);
    wrapper.unmount();
  });

  test('button nativeType', async () => {
    const wrapper = mount(Button, {
      props: {
        nativeType: 'submit',
      },
    });
    expect(wrapper.attributes('type')).toBe('submit');
    wrapper.unmount();
  });

  test('button size', async () => {
    const wrapper = mount(Button, {
      props: {
        size: 'large',
      },
    });
    expect(wrapper.props('size')).toBe('large');

    wrapper.unmount();
  });

  test('button click', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'default',
      },
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted()).toBeUndefined();
  });
});
