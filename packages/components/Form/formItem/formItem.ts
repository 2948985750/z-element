import { Arrayable } from 'vitest';
import { ComponentSize } from '../../utils/size';
import { Rules } from '../form/form';
export type ValidateState = 'success' | 'error' | 'unchecked' | 'validating';

export interface FormItemProps {
  prop: Arrayable<string>;
  label: string;
  labelWidth?: string;
  required?: boolean;
  size?: ComponentSize;
  rules?: Arrayable<Rules>;
}
