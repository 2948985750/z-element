import { PropType } from 'vue';

interface ColProps_ {
  span?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export const ColProps = {
  span: {
    type: Number as PropType<ColProps_['span']>,
    default: 24,
  },
  xs: Number as PropType<ColProps_['xs']>,
  sm: Number as PropType<ColProps_['sm']>,
  md: Number as PropType<ColProps_['md']>,
  lg: Number as PropType<ColProps_['lg']>,
  xl: Number as PropType<ColProps_['xl']>,
};
