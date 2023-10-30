import { Ref, InjectionKey } from 'vue';
import { ComponentSize } from '../../utils/size';

type RadioOption = {
  label: string | number;
  key: string;
  disabled?: boolean;
};

export interface RadioItemContext {
  switchChecked: (isChecked?: boolean) => void;
  label: number | string;
  checked: Ref<boolean>;
}

export interface RadioProps {
  modelValue: string | number;
  options: RadioOption[];
  disabled?: boolean;
  size?: ComponentSize;
  name: string;
}

export interface RadioContext extends Omit<RadioProps, 'size'> {
  size: Ref<number | string>;
  addRadioOption: (context: RadioItemContext) => void;
  removeRadioOption: (context: RadioItemContext) => void;
  setCheckedOpt: (value: string | number) => void;
}

export const radioKey: InjectionKey<RadioContext> = Symbol.for('radioContext');
export type RadioEmit = {
  'update:modelValue': [checked: string | number];
  change: [checked: string | number];
};
export type RadioOptions = RadioOption[];
