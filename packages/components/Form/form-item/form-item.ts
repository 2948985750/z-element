import type { PropType, ExtractPropTypes } from 'vue';
import { ComponentSize } from '../../types-util/size';
export type validateState = 'success' | 'error' | 'unchecked';
export const FormItemProps = {
  prop: {
    type: String,
    required: true,
  },
  label: {
    type: String,
  },
  labelWidth: {
    type: String,
  },
  required: { type: Boolean, default: false },
  size: String as PropType<ComponentSize>,
  showMessage: {
    type: Boolean,
    default: true,
  },
  for: {
    type: String,
    default: '',
  },
};
export type FormItemProps = ExtractPropTypes<typeof FormItemProps>;
