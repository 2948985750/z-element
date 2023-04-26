import { mount, shallowMount } from '@vue/test-utils';
import { it, expect, describe } from 'vitest';
import zContainer from '../zContainer.vue';
import zHeader from '../zHeader.vue';
import { h, ref, nextTick } from 'vue';

describe('container', () => {
  it('z-container mount', async () => {
    const dom = mount(zContainer, {
      slots: {
        default: 'container',
      },
    });
    expect(dom.classes()).toMatch(/_z-container_\w/);
    expect(dom.text()).toBe('container');
  });

  it('z-container direction prop', async () => {
    const wrapper = mount(zContainer, {
      props: {
        direction: 'row',
      },
    });

    const beforeChange = wrapper.classes();
    expect(beforeChange).toMatch(/_z-container_./);

    await wrapper.setProps({
      direction: 'column',
    });
    expect(wrapper.classes()).toMatch(/_z-column_/);
  });
});

describe('zHeader create', () => {
  it('header create', async () => {
    const wrapper = shallowMount(zHeader, {
      slots: {
        default: 'header text',
      },
    });

    expect(wrapper.classes()).toMatch(/_z-header_./);
    expect(wrapper.text()).toBe('header text');
  });

  it('header hight prop', async () => {
    const wrapper = mount(zHeader, {
      props: {
        height: '90px',
      },
    });
    expect(wrapper.props('height')).toBe('90px');
  });
});
