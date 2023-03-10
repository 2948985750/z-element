import { h } from 'vue';
import { it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Row from '../ZRow.vue';
import Col from '../ZCol.vue';

it('layout mount', async () => {
  const wrapper = await mount(Row, {
    slots: {
      default: h(Col, {
        slots: {
          default: 'col',
        },
      }),
    },
  });

  console.log(getComputedStyle(wrapper.element));
});
