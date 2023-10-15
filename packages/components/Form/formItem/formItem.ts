import type { PropType, ExtractPropTypes } from 'vue';
import { ComponentSize } from '../../utils/size';
export type validateState = 'success' | 'error' | 'unchecked';

export interface FormItemProps {
  prop: string;
  label: string;
  labelWidth?: string;
  required?: boolean;
  size?: ComponentSize;
}
