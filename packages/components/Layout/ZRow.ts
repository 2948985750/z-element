import { PropType } from 'vue';

interface RowProps_ {
  space?: number;
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
  align?: 'top' | 'center' | 'bottom';
}

export const RowProps = {
  space: {
    type: Number,
    default: 0,
  },
  justify: {
    type: String as PropType<RowProps_['justify']>,
    default: 'start',
  },
  align: {
    type: String as PropType<RowProps_['align']>,
    default: 'align',
  },
};
