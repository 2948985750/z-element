import { ComponentSize } from '../../utils/size';
import { InjectionKey, Ref, SetupContext } from 'vue';

type CheckBoxOption = {
  label: string | number;
  key: string;
  disabled?: boolean;
};

export interface CheckBoxOptionContext {
  switchChecked: (isChecked?: boolean) => void;
  label: number | string;
  checked: Ref<boolean>;
}

export interface CheckBoxProps {
  modelValue: Array<string | number>;
  options: CheckBoxOption[];
  disabled?: boolean;
  size?: ComponentSize;
}

export interface CheckboxContext extends Omit<CheckBoxProps, 'size'> {
  size: Ref<number | string>;
  addCheckBoxOption: (context: CheckBoxOptionContext) => void;
  removeCheckBoxOption: (context: CheckBoxOptionContext) => void;
  addCheckedOpt: (value: string | number) => void;
  removeCheckedOpt: (value: string | number) => void;
}

export const checkboxKey: InjectionKey<CheckboxContext> = Symbol.for('checkboxContext');
export type CheckBoxEmit = {
  'update:modelValue': [checked: Array<string | number>];
  change: [checked: Array<string | number>];
};
export type CheckBoxOptions = CheckBoxOption[];
