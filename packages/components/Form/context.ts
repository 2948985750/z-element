import type { SetupContext } from 'vue';
import type { Arrayable } from 'vitest';
import type { ValidateError, ValidateFieldsError } from 'async-validator';
import type { FormItemProps } from './formItem/formItem';
import type { FormEmits, FormProps, Trigger, Rules } from './form/form';
import type { ValidateState } from './formItem/formItem';

export type FormValidateCallback = (isValid: boolean, invalidFields?: ValidateFieldsError) => void;
export type FormValidationResult = Promise<boolean>;
export interface FormValidateFailure {
  errors: ValidateError[] | null;
  fields: ValidateFieldsError;
}

export interface FormContext extends FormProps {
  emit: SetupContext<FormEmits>['emit'];
  addValidateItem: (item: FormItemContext) => void;
  removeValidateItem: (item: FormItemContext) => void;
  resetValidateItem: (props?: Arrayable<string>) => void;
  clearValidate: (props?: Arrayable<string>) => void;
  validateField: (props?: Arrayable<string>, callback?: FormValidateCallback) => Promise<boolean>;
  filterValidateItems: (prop: Arrayable<string>) => FormItemContext[];
}

export interface FormItemContext extends FormItemProps {
  el: HTMLDivElement | undefined;
  validationState: ValidateState;
  validate: (trigger: Trigger, callback?: FormValidateCallback) => Promise<boolean>;
  resetField(): void;
  clearValidate(): void;
}
