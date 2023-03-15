import type { SetupContext } from 'vue';
import type { Arrayable } from '../types-util/type-util';
import type { RuleItem, Rule, ValidateError, ValidateFieldsError } from 'async-validator';
import type { ComponentSize } from '../types-util/size';
import type { FormItemProps } from './form-item/form-item';
import type { FormEmits, FormProps } from './form/form';

export type FormRules = Partial<Record<string, Rule>>;

export type FormValidationResult = Promise<boolean>;
export type FormValidateCallback = (isValid: boolean, invalidFields?: ValidateFieldsError) => void;
export interface FormValidateFailure {
  errors: ValidateError[] | null;
  fields: ValidateFieldsError;
}

export type FormContext = FormProps & {
  emit: SetupContext<FormEmits>['emit'];
  // // expose
  // addField: (field: FormItemContext) => void;
  // removeField: (field: FormItemContext) => void;
  // resetFields: (props?: Arrayable<any>) => void;
  // clearValidate: (props?: Arrayable<any>) => void;
  // validateField: (props?: Arrayable<any>, callback?: FormValidateCallback) => FormValidationResult;
};

export interface FormItemContext extends FormItemProps {
  $el: HTMLDivElement | undefined;
  size: ComponentSize;
  validateState: string;
  isGroup: boolean;
  labelId: string;
  inputIds: string[];
  hasLabel: boolean;
  // addInputId: (id: string) => void;
  // removeInputId: (id: string) => void;
  // validate: (trigger: string, callback?: FormValidateCallback) => FormValidationResult;
  // resetField(): void;
  // clearValidate(): void;
}
