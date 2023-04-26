import { PropType, ExtractPropTypes, InjectionKey } from 'vue';
import Row from './row.vue';

interface RowProps_ {
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
  align?: 'stretch' | 'top' | 'center' | 'bottom';
}

export const rowProps = {
  space: {
    type: String,
    default: '0',
  },
  justify: {
    type: String as PropType<RowProps_['justify']>,
    default: 'start',
  },
  align: {
    type: String as PropType<RowProps_['align']>,
    default: 'stretch',
  },
};

export type RowProps = ExtractPropTypes<typeof rowProps>;
export type RowInstance = InstanceType<typeof Row>;

export const layoutInjectKey: InjectionKey<RowProps> = Symbol.for('layout');
