import { mount } from '@vue/test-utils';
import { it, expect } from 'vitest';
import ZContainer from '../ZContainer.vue';

it('ZContainer mount', async () => {
  const dom = mount(ZContainer);
  expect(dom.classes().join()).toBe('_z-container_kta08_2');
});

it('ZContainer direction prop', async () => {
  const prop_val_row = mount(ZContainer, {
    props: {
      direction: 'column',
    },
  });

  expect(prop_val_row.classes().join(',')).toBe('_z-container_kta08_2,_z-column_kta08_10');
});
