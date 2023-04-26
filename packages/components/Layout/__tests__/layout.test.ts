import { describe, expect, it, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { zRow, zCol } from '../index';
import { getStyle } from '../../../../test-util/util';

describe('Row.vue', () => {
  test('row create', async () => {
    const wrapper = mount(zRow, {
      slots: {
        default: 'row',
      },
    });
    expect(wrapper.classes()).toContain('_z-row_104b93');
    expect(wrapper.text()).toContain('row');
  });

  test('space', async () => {
    const wrapper = mount(zRow, {
      props: {
        space: '20px',
      },
      slots: {
        default: mount(zCol, {
          slots: {
            default: 'col',
          },
        }),
      },
    });
  });
});
