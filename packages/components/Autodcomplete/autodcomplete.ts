import { PropType } from 'vue';
import Autocomplete from './autodcomplete.vue';
type PlacementType = 'top' | 'top- start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end';

export const AutodcompleteProps = {
  modelValue: {
    type: String,
    default: '',
  },
  debounce: Number,
  placement: {
    type: String as PropType<PlacementType>,
    default: 'bottom-start',
  },
  onfocusTrigger: {
    type: Boolean,
    default: true,
  },
  isUnMatchedEnter: {
    type: Boolean,
    default: false,
  },
};

export const AutodcompleteEvent = {
  'update:modelValue': () => void 0,
  input: (val: string) => void 0,
  change: (val: string) => void 0,
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
  select: (item: Record<string, any>): object => ({}),
};
export type AutocompleteEmits = typeof AutodcompleteEvent;

export type AutocompleteInstance = InstanceType<typeof Autocomplete>;
