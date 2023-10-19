<template>
  <form :class="[$style['z-form']]">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { provide, reactive, toRefs, computed, onMounted, watchEffect } from 'vue';
import { usePathToObject } from '../../../utils/usePathToObject';
import { isFunction } from 'lodash';

import { formContextKey } from '../useContext';
import Validator from 'async-validator';
import { FormItemProps } from '../formItem/formItem';
import { ensureArray } from '../../../utils/basicUtilityFunctions';

import type { FormContext, FormItemContext, FormValidationResult } from '../context';
import type { ValidateFieldsError } from 'async-validator';
import type { FormValidateCallback, FormProps, FormEmits } from './form';
import { Arrayable } from 'vitest';

const props = withDefaults(defineProps<FormProps>(), {
  inline: false,
  disabled: false,
  labelWidth: '120px',
  size: 'default',
  scrollToError: false,
  ruleChangeValidate: true,
});

const validateItems: FormItemContext[] = [];

watchEffect(() => {
  console.log(validateItems);
});

const emit = defineEmits<FormEmits>();
const COMPONENT_NAME = 'zForm';
const isInline = computed(() => {
  return props.inline ? 'flex' : 'block';
});

const addValidateItem: FormContext['addValidateItem'] = (item) => {
  validateItems.push(item);
};

const removeValidateItem: FormContext['removeValidateItem'] = (item) => {
  if (item.prop) {
    validateItems.splice(validateItems.indexOf(item), 1);
    // 防止删除数组末尾的那一项
  }
};

const resetValidateItem: FormContext['resetValidateItem'] = (props = []) => {};

const clearValidate: FormContext['clearValidate'] = () => {};

const doValidate = async (modelProps: Arrayable<string>) => {
  if (!props.model) {
    console.warn('model 属性并未传入不能进行校验');
    return false;
  }

  const _validateItems = filterValidateItems(modelProps);

  if (_validateItems.length === 0) {
    return true;
  }

  let validationErrors: ValidateFieldsError = {};
  for (const iterator of _validateItems) {
    try {
      await iterator.validate('');
    } catch (error) {
      validationErrors = {
        ...(error as ValidateFieldsError),
      };
    }
  }
  if (Object.keys(validationErrors).length > 0) {
    return true;
  }

  return Promise.reject(validationErrors);
};

const scrollToField = (prop: Arrayable<string>) => {
  const field = filterValidateItems(prop)[0];
  if (field) {
    field.el?.scrollIntoView(props.scrollIntoViewOptions);
  }
};

const validateField: FormContext['validateField'] = (modelProps = [], callback) => {
  const isFun = !isFunction(callback);
  try {
    const reault = doValidate(modelProps);
  } catch (error) {
    if (error instanceof Error) throw error;
    if (props.scrollToError) {
      scrollToField(modelProps);
    }
    callback?.(false, error as ValidateFieldsError);
    return Promise.reject(error);
  }

  return Promise.resolve(true);
};

const validate = async (callback?: FormValidateCallback): FormValidationResult => validateField(undefined, callback);

const filterValidateItems: FormContext['filterValidateItems'] = (modelProps = []) => {
  if (modelProps.length > 0) {
    return validateItems.filter((item) => item.prop && modelProps.includes(item.prop[item.prop.length - 1]));
  }
  return validateItems;
};

const resetFields: FormContext['resetValidateItem'] = () => {};

const ctx = reactive({
  ...toRefs(props),
  emit,
  addValidateItem,
  removeValidateItem,
  resetValidateItem,
  clearValidate,
  validateField,
  filterValidateItems,
});

provide(formContextKey, ctx);
onMounted(() => {});

defineExpose({
  validate,
  validateField,
  resetFields,
  clearValidate,
  scrollToField,
});
</script>

<style module lang="postcss">
.z-form {
  @apply m-0 flex-wrap;
  display: v-bind(isInline);
}
</style>
