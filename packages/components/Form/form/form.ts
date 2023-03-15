import { PropType, ExtractPropTypes } from 'vue';
import type { Rule } from 'async-validator';
import type { ComponentSize } from '../../types-util/size';

/**
 * 校验结构：数据源，规则，校验触发时机
 * 校验范围：所有表单控件
 * 校验结果：所有表单组件应包含一个错误信息容器
 * 校验
 */
type Rule_ = Rule & {
  trigger: 'blur' | 'change';
};
export interface FormProps_ {
  model: Record<string, any>;
  rules: Record<string, Rule_> | Rule;
  size: ComponentSize;
}

export const FormProps = {
  labelWidth: String,
  model: Object as PropType<FormProps_['model']>,
  rules: Object as PropType<FormProps_['rules']>,
  size: String as PropType<FormProps_['size']>,
};

export const FormEmits = {
  validate() {},
};

export type FormProps = ExtractPropTypes<typeof FormProps>;
export type FormEmits = typeof FormEmits;
