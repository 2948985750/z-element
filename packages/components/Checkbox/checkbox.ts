import type { PropType } from 'vue';

export interface CheckBoxProps_ {
  size: 'large' | 'default' | 'small';
}
export const CheckBoxProps = {
  modelValue: [String, Number, Boolean, Object],
  label: String,
  trueLabel: [String, Number, Boolean],
  falseLabel: [String, Number, Boolean],
  checked: Boolean,
  disabled: Boolean,
  border: Boolean,
  size: {
    type: String as PropType<CheckBoxProps_['size']>,
    default: 'default',
  },
};
