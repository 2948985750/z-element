import type { RuleItem } from 'async-validator';
import type { ComponentSize } from '../../utils/size';
import type { Arrayable } from 'vitest';
import { reactive } from 'vue';
import { MaybeRef } from '@vueuse/core';

export type Trigger = 'blur' | 'change' | 'focus' | 'reset' | 'input' | '';
export type Rules = RuleItem & {
  trigger?: Arrayable<Trigger>;
};

interface ScrollOptions {}

export interface FormProps {
  model: Record<string, any>;
  rules?: Record<string, Arrayable<Rules>>;
  inline?: boolean;
  labelWidth?: string;
  size?: ComponentSize;
  scrollToError?: boolean;
  ruleChangeValidate?: boolean;
  disabled?: boolean;
  scrollOptions?: {
    behavior?: 'smooth' | 'instant' | 'auto';
    block?: 'start' | 'center' | 'end' | 'nearest';
    inline?: 'start' | 'center' | 'end' | 'nearest';
  };
}

export type FormEmits = {
  validate: [prop: string, isValid: boolean, message: string, ...rest: any[]];
};
