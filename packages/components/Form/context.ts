import type { SetupContext } from 'vue';
import type { Arrayable } from 'vitest';
import type { ValidateError, ValidateFieldsError } from 'async-validator';
import type { FormItemProps } from './formItem/formItem';
import type { FormEmits, FormProps, Trigger, Rules } from './form/form';
import type { validateState } from './formItem/formItem';

export type FormValidateCallback = (isValid: boolean, invalidFields?: ValidateFieldsError) => void;

export interface FormValidateFailure {
  errors: ValidateError[] | null;
  fields: ValidateFieldsError;
}

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
  getRule: (object: Record<string, Arrayable<Rules>> | Arrayable<Rules>, prop: string) => Rules[];
  filterRule: (object: Rules[], trigger: string) => Rules[];
}

export interface FormItemContext extends FormItemProps {
  el: HTMLDivElement;
  validationState: validateState;
  validate: (trigger: string, callback?: FormValidateCallback) => Promise<boolean>;
  resetField(): void;
  clearValidate(): void;
}
