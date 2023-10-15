//

import { ComponentSize } from '../utils/size';

type InputType = 'text' | 'password' | 'textarea' | 'submit';

export type InputEmits = {
  input: [e: Event];
  change: [e: Event];
  focus: [e: FocusEvent];
  blur: [e: Event];
  clear: [];
  keydown: [e: KeyboardEvent];
  'update:modelValue': [e: string];
};

export interface InputProps {
  modelValue?: any;
  name?: string;
  type?: InputType;
  showWordLimit?: boolean;
  clearable?: boolean;
  formatter?: () => void;
  parser?: () => void;
  showPassWord?: boolean;
  disabled?: boolean;
  size?: ComponentSize;
  autosize?: any;
  readonly?: boolean;
  tabindex?: string | number;
  autocomplete?: boolean;
}
