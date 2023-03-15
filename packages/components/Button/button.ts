import type { Component } from 'vue';
import { PropType } from 'vue';

interface ButtonProp {
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'plain' | 'text';
  size?: 'default' | 'small' | 'large';
  action?: 'button' | 'submit' | 'reset';
  icon?: Component | undefined;
  // disabled?: boolean;
  // plain?: boolean;
  // round?: boolean;
  // circle?: boolean;
  // bg?: boolean;
  // color?: string;
}

export const ButtonProps = {
  type: { type: String as PropType<ButtonProp['type']>, default: 'primary' },
  size: { type: String as PropType<ButtonProp['size']>, default: 'default' },
  action: { type: String as PropType<ButtonProp['action']>, default: 'button' },
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
