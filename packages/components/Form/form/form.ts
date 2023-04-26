import { PropType, ExtractPropTypes } from 'vue';
import type { RuleItem } from 'async-validator';
import type { ComponentSize } from '../../types-util/size';
import type { Arrayable } from 'vitest';
import type { ValidateFieldsError } from 'async-validator';

export type Trigger = 'blur' | 'change' | 'focus' | 'reset' | 'input';

export type Rule = RuleItem & {
  trigger: Arrayable<Trigger>;
};

export const FormProps = {
  labelWidth: String || Number,
  model: Object as PropType<Record<string, any>>,
  size: {
    type: String as PropType<ComponentSize>,
    default: 'default',
  },
  scrollToError: {
    type: Boolean,
    default: false,
  },
  inline: {
    type: Boolean,
    default: false,
  },
  ruleChangeValidate: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  inlineMessage: {
    type: Boolean,
    default: false,
  },
  rules: Object as PropType<Record<string, Arrayable<Rule>>>,
};

export const FormEmits = {
  validate: (prop: string, isValid: boolean, message: string): void => void 0,
};

export type FormProps = ExtractPropTypes<typeof FormProps>;
export type FormEmits = ExtractPropTypes<typeof FormEmits>;

export type FormValidateCallback = (isValid: boolean, invalidFields?: ValidateFieldsError) => void;
