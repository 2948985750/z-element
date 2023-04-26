import type { Component, ExtractPropTypes } from 'vue';
import { PropType } from 'vue';

interface ButtonProp {
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'plain' | 'text';
  size?: 'default' | 'small' | 'large';
  icon?: Component | undefined;
  nativeType?: 'button' | 'submit' | 'reset';
  // disabled?: boolean;
  // plain?: boolean;
  // round?: boolean;
  // circle?: boolean;
  // bg?: boolean;
  // color?: string;
}

export const ButtonProps = {
  type: { type: String as PropType<ButtonProp['type']>, default: 'primary' },
  nativeType: {
    type: String as PropType<ButtonProp['nativeType']>,
    default: 'button',
  },
  size: { type: String as PropType<ButtonProp['size']>, default: 'default' },
  icon: { type: Object as PropType<ButtonProp['icon']>, default: void 0 },
  loadingIcon: { type: Object as PropType<ButtonProp['icon']>, default: void 0 },
  color: String,
  disabled: { type: Boolean, default: false },
  plain: { type: Boolean, default: false },
  round: { type: Boolean, default: false },
  circle: { type: Boolean, default: false },
  bg: { type: Boolean, default: true },
  loading: { type: Boolean, default: false },
};

export type ButtonProps = ExtractPropTypes<typeof ButtonProps>;
