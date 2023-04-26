import { h, nextTick } from 'vue';
import { describe, test, expect } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import Form from '../form/zForm.vue';
import FormItem from '../form-item/zFormItem.vue';
describe('form.vue', () => {
  test('label', async () => {
    const wrapper = mount(Form, {
      props: {
        labelWidth: '20px',
      },
      slots: {
        default: h(FormItem, {
          props: {
            label: 'label',
            labelWidth: '20px',
            prop: 'a',
          },
        }),
      },
    });

    expect('90px').toBe('90px');
  });
});
