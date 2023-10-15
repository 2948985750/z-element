import type { RuleItem } from 'async-validator';
import type { ComponentSize } from '../../utils/size';
import type { Arrayable } from 'vitest';
import type { ValidateFieldsError } from 'async-validator';

export type FormValidateCallback = (isValid: boolean, invalidFields?: ValidateFieldsError) => void;
export type Trigger = 'blur' | 'change' | 'focus' | 'reset' | 'input';
export type Rules = RuleItem & {
  trigger: Arrayable<Trigger>;
};

export interface FormProps {
  model: Record<string, any>;
  rules?: Record<string, Rules>;
  inline?: boolean;
  labelWidth?: string;
  size?: ComponentSize;
  scrollToError?: boolean;
  ruleChangeValidate?: boolean;
  disabled?: boolean;
  inlineMessage?: boolean;
}

export type FormEmits = {
  validate: [prop: string, isValid: boolean, message: string, ...rest: any[]];
};
