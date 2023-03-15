import { mount } from '@vue/test-utils';
import { it, expect } from 'vitest';

import aside from '../aside.vue';
it('aside mount ', async () => {
  const dom = mount(aside, {
    props: {
      width: '',
    },
  });
});
