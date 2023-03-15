import { mount } from '@vue/test-utils';
import { it, expect } from 'vitest';
import ZContainer from '../container.vue';
import ZHeader from '../header.vue';
import { h } from 'vue';

it('ZContainer mount', async () => {
  const dom = mount(ZContainer, {
    slots: {
      default: 'container',
    },
  });
  expect(dom.classes().join()).toMatch(/_z-container_/);
  expect(dom.text()).toBe('container');
});

it('ZContainer direction prop', async () => {
  const prop_val_row = mount(ZContainer, {
    props: {
      direction: 'column',
    },
  });

  const classes = prop_val_row.classes();
  expect(classes.join()).toMatch(/_z-column_/);
});

it('ZContainer child', async () => {
  const dom = mount(ZContainer, {
    slots: {
      default: h(ZHeader, null, 'header'),
    },
  });

  const classes = dom.classes();
  expect(classes.join()).toMatch(/_z-container_|_z-column_./);
});
