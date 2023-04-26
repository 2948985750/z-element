import type { ExtractPropTypes, PropType } from 'vue';
import ColVue from './col.vue';
type ns = number | string;
export interface MediaArg {
  span?: ns;
  offset?: ns;
  pull?: ns;
  push?: ns;
}

export const ColProps = {
  span: {
    type: [String, Number] as PropType<MediaArg['span']>,
  },
  offset: {
    type: [String, Number] as PropType<MediaArg['offset']>,
  },
  pull: {
    type: [String, Number] as PropType<MediaArg['pull']>,
  },
  push: {
    type: [String, Number] as PropType<MediaArg['push']>,
  },
  xs: [Number, String, Object] as PropType<ns | MediaArg>,
  sm: [Number, String, Object] as PropType<ns | MediaArg>,
  md: [Number, String, Object] as PropType<ns | MediaArg>,
  lg: [Number, String, Object] as PropType<ns | MediaArg>,
  xl: [Number, String, Object] as PropType<ns | MediaArg>,
};

export type ColProps = ExtractPropTypes<typeof ColProps>;
export type ColInstance = InstanceType<typeof ColVue>;
