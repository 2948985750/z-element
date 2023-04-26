import type { PropType, Component } from 'vue';
import type { ComponentSize } from '../types-util/size';

export type InputAutoSize = { minRows?: number; maxRows?: number } | boolean;
export type Resize = 'none' | 'horizontal' | 'vertical';
export type TextAreaSize = { minRows: number; maxRows?: number };
export type TextAreaStyle = { overflowY: '' };

export const InputProps = {
  type: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  showWordLimit: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  formatter: Function,
  parser: Function,
  showPassWord: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<ComponentSize>,
    default: 'default',
  },
  autosize: {
    type: [Boolean, Object] as PropType<InputAutoSize | TextAreaSize>,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },

  label: String,

  validateEvent: {
    type: Boolean,
    default: true,
  },

  autocomplete: {
    type: String,
    default: 'off',
  },
  resize: {
    type: String as PropType<Resize>,
    default: 'vertical',
  },
};

export const inputEmits = {
  'update:modelValue': (val: string | number) => val,
  input: (val: string) => val,
  change: (val: string) => val,
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
  mouseleave: (evt: MouseEvent) => evt instanceof MouseEvent,
  mouseenter: (evt: MouseEvent) => evt instanceof MouseEvent,
  keydown: (evt: KeyboardEvent | Event) => evt instanceof Event,
  compositionstart: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionupdate: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionend: (evt: CompositionEvent) => evt instanceof CompositionEvent,
};

export type InputEmits = typeof inputEmits;
