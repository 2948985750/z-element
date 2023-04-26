import { inject } from 'vue';
import { formContextKey, formItemContextKey } from './key';
import { FormContext, FormItemContext } from './context';
export function useFormContext(): FormContext | void {
  return inject(formContextKey);
}

export function useFormItemContext(): FormItemContext | void {
  return inject(formItemContextKey);
}
