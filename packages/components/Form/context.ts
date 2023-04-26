import type { SetupContext } from 'vue';
import type { Arrayable } from '../types-util/type-util';
import type { ValidateError, ValidateFieldsError } from 'async-validator';
import type { FormItemProps } from './form-item/form-item';
import type { FormEmits, FormProps, Rule, Trigger } from './form/form';
import type { validateState } from './form-item/form-item';

export type FormValidateCallback = (isValid: boolean, invalidFields?: ValidateFieldsError) => void;
export interface FormValidateFailure {
  errors: ValidateError[] | null;
  fields: ValidateFieldsError;
}

export interface FormContext extends FormProps {
  emit: SetupContext<FormEmits>['emit'];
  addField: (field: FormItemContext) => void;
  removeField: (field: FormItemContext) => void;
  resetFields: (props?: Arrayable<any>) => void;
  clearValidate: (props?: Arrayable<any>) => void;
  validateField: (props?: Arrayable<any>, callback?: FormValidateCallback) => Promise<boolean>;
  getRule: (object: Record<string, Arrayable<Rule>> | Arrayable<Rule>, prop: string) => Rule[];
  filterRule: (object: Rule[], trigger: string) => Rule[];
}

export interface FormItemContext extends FormItemProps {
  $el: HTMLDivElement;
  validationState: validateState;
  // isGroup: boolean;
  // labelId: string;
  // inputIds: string[];
  // hasLabel: boolean;
  // addInputId: (id: string) => void;
  // removeInputId: (id: string) => void;
  validate: (trigger: string, callback?: FormValidateCallback) => Promise<boolean>;
  resetField(): void;
  clearValidate(): void;
}

export interface FormValidateFailure {
  errors: ValidateError[] | null;
  fields: ValidateFieldsError;
}
