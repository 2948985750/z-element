import { ref } from 'vue';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';

import Input from './input.vue';

describe('input.vue', () => {
  test('create', async () => {
    const input = ref('input');
    const handleFocus = vi.fn();

    const wrapper = mount(Input);
    const inputElm = wrapper.find('input');
  });
});
