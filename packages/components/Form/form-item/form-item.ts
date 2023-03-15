import type { PropType, ExtractPropTypes } from 'vue';
import type { Rules } from 'async-validator';
import { ComponentSize } from '../../types-util/size';
import { Arrayable } from '../../types-util/type-util';

export const FormItemProps = {
  prop: String as PropType<Arrayable<string>>,
  label: String,
  labelWidth: String,
  rules: [Object, Array] as PropType<Rules>,
  required: Boolean,
  size: String as PropType<ComponentSize>,
  showMessage: {
    type: Boolean,
    default: true,
  },
};

export type FormItemProps = ExtractPropTypes<typeof FormItemProps>;
