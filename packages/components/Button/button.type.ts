import type { ExtractPropTypes } from 'vue';
type btnType = 'primary' | 'success' | 'info' | 'wraning' | 'danger' | 'plain' | 'text';
type sizeType = 'default' | 'small' | 'large';
type actionType = 'button' | 'submit' | 'reset';

const ButtonProps_ = {
  type: String as unknown as btnType,
  size: String as unknown as sizeType,
  action: String as unknown as actionType,
  disabled: Boolean,
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  bg: Boolean,
  color: String,
};

export type ButtonProps = ExtractPropTypes<typeof ButtonProps_>;
