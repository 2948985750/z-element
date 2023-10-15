<template>
  <form :class="[$style['z-form']]">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { provide, reactive, toRefs, computed, onMounted } from 'vue';
import { usePathToObject } from '../../../utils/usePathToObject';
import { isFunction } from 'lodash';
import { formContextKey } from '../useContext';

import type { FormContext, FormItemContext } from '../context';
import type { ValidateFieldsError } from 'async-validator';
import type { FormValidateCallback, FormProps, FormEmits } from './form';
import { Arrayable } from 'vitest';

const props = withDefaults(defineProps<FormProps>(), {
  inline: false,
  disabled: false,
});
const emit = defineEmits<FormEmits>();
const fields: FormItemContext[] = [];

const COMPONENT_NAME = 'zForm';
const dataHandle = usePathToObject();

const getRule: FormContext['getRule'] = (object, prop) => {
  return dataHandle.getValueByPath(object, prop);
};

const filterRule: FormContext['filterRule'] = (object, trigger) => {
  return object.filter((rule) => {
    if (!rule.trigger || !trigger) {
      return true;
    }
    if (Array.isArray(rule.trigger)) {
      return trigger.includes(trigger);
    } else {
      return rule.trigger === trigger;
    }
  });
};

const scrollToField = (prop: string) => {
  const field = dataHandle.getValueByPath(fields, prop)[0];
  if (field) {
    field.$el?.scrollIntoView();
  }
};

const filterFields = (context: FormItemContext[], properties: string[]) => {
  if (properties.length === 0) {
    return context;
  }
  return context.filter((context, index) => {
    return context.prop === properties[index];
  });
};

const addField: FormContext['addField'] = (field) => {
  fields.push(field);
};

const removeField: FormContext['removeField'] = (field) => {
  if (field.prop) {
    fields.splice(fields.indexOf(field), 1);
  }
};

const resetFields: FormContext['resetFields'] = (properties) => {
  if (!props.model) {
    console.warn(COMPONENT_NAME, 'model is required for resetFields to work.');
    return;
  }
  filterFields(fields, []).forEach((field) => field.resetField());
};

const clearValidate: FormContext['clearValidate'] = (props = []) => {
  dataHandle.getValueByPath(fields, props).forEach((field: FormItemContext) => field.clearValidate());
};

const isValidatable = computed(() => {
  const hasModel = !!props.model;
  if (!hasModel) {
    console.warn(COMPONENT_NAME, 'model is required for validate to work.');
  }
  return hasModel;
});

const isInline = computed(() => {
  return props.inline ? 'flex' : 'block';
});

const doValidateField = async (props: string[]): Promise<boolean> => {
  if (!isValidatable.value) return false;

  const fieldItems = filterFields(fields, props);
  let validationErrors: ValidateFieldsError = {};
  for (const field of fieldItems) {
    try {
      await field.validate('');
    } catch (fields) {
      validationErrors = {
        ...validationErrors,
        ...(fields as ValidateFieldsError),
      };
    }
  }

  if (Object.keys(validationErrors).length === 0) {
    return true;
  }
  return Promise.reject(validationErrors);
};

const validate = async (callback?: FormValidateCallback): Promise<boolean> => validateField(undefined, callback);

const validateField: FormContext['validateField'] = async (modelProps = [], callback) => {
  const shouldThrow = !isFunction(callback);
  try {
    const result = await doValidateField(modelProps);
    if (result === true) {
      callback?.(result);
    }
    return result;
  } catch (e) {
    if (e instanceof Error) throw e;
    const invalidFields = e as ValidateFieldsError;

    if (props.scrollToError) {
      scrollToField(Object.keys(invalidFields)[0]);
    }
    callback?.(false, invalidFields);
    return shouldThrow && Promise.reject(invalidFields);
  }
};

const ctx = reactive({
  ...toRefs(props),
  emit,
  addField,
  removeField,
  resetFields,
  clearValidate,
  validateField,
  getRule,
  filterRule,
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
