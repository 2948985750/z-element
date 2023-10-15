import { inject } from 'vue';
import { FormContext, FormItemContext } from './context';
import type { InjectionKey } from 'vue';

export const formContextKey: InjectionKey<FormContext> = Symbol.for('formContextKey');
export const formItemContextKey: InjectionKey<FormItemContext> = Symbol.for('formItemContextKey');

export function useFormContext(): FormContext | undefined {
  return inject(formContextKey);
}

export function useFormItemContext(): FormItemContext | undefined {
  return inject(formItemContextKey);
}
