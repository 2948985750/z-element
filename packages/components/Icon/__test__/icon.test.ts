import { describe, test, expect } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';

import { h } from 'vue';
import Icon from '../zIcon.vue';
import { CakeIcon } from '@heroicons/vue/24/solid';
import { getStyle } from '../../../../test-util/util';

import { zRow, zCol } from './../../Layout/index';

describe('icon.vue', () => {
  test('icon mount', async () => {
    const dom = mount(Icon, {
      slots: {
        default: CakeIcon,
      },
    });
    expect(dom.classes().join().includes('_z-icon_')).toBe(true);
  });
  test('icon style props', async () => {
    const box = mount(Icon, {
      props: {
        size: '50',
        color: 'green',
      },
      slots: {
        default: '2500',
      },
    });
    console.log('250');
    console.log(getComputedStyle(box.element).getPropertyValue('width'));
    // expect(getStyle(box.element, 'color')).toBe('green');
  });
});
