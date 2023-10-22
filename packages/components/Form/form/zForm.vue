<template>
  <form :class="[$style['z-form']]">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { isFunction, get } from 'lodash';
import { provide, reactive, toRefs, computed, onMounted, watchEffect } from 'vue';
import { formContextKey } from '../useContext';
import { usePathToObject } from '../../../utils/usePathToObject';

import type { FormContext, FormItemContext, FormValidationResult } from '../context';
import type { ValidateFieldsError } from 'async-validator';
import type { FormProps, FormEmits } from './form';
import type { FormValidateCallback } from "../context"


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

const resetValidateItem: FormContext['resetValidateItem'] = (props = []) => { };

const clearValidate: FormContext['clearValidate'] = (modelProps = []) => {
  const item = filterValidateItems(modelProps)
  item.forEach((v) => {
    v.clearValidate()
  })
};

const doValidate = async (modelProps: string[]) => {
  if (!props.model) {
    console.warn('model 属性并未传入不能进行校验');
    return false;
  }

  const _validateItems = filterValidateItems(modelProps);
  console.log(_validateItems);

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

const scrollToField = (prop: string[]) => {
  const field = filterValidateItems(prop)[0];
  if (field) {
    field.el?.scrollIntoView(props.scrollOptions);
  }
};

const validateField: FormContext['validateField'] = (modelProps = [], callback) => {
  const isFun = isFunction(callback);
  return doValidate(modelProps).then(() => {
    return Promise.resolve(true);
  }).catch((error) => {
    if (error instanceof Error) throw error;

    if (props.scrollToError) {
      scrollToField(modelProps);
    }

    isFun && callback?.(false, error as ValidateFieldsError);

    return Promise.reject(error);
  })
};

const validate = async (callback?: FormValidateCallback): FormValidationResult => validateField([], callback);

const filterValidateItems: FormContext['filterValidateItems'] = (modelProps = []) => {
  if (modelProps && modelProps.length > 0) {
    return validateItems.filter((item) => item.prop && modelProps.includes(item.prop));
  }
  return validateItems;
};

const resetFields: FormContext['resetValidateItem'] = () => { };

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
onMounted(() => { });

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
