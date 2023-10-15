<template>
  <div :class="[$style['z-form-item']]" ref="formItemRef">
    <label :class="[$style['z-form-item-label']]" :required="isRequired">{{ props.label }}</label>
    <slot></slot>
    <span :class="[$style['z-form-item-message']]">{{ validateMessage }}</span>
  </div>
</template>

<script setup lang="ts">
//
import { computed, provide, reactive, toRefs, ref, onMounted, onBeforeUnmount, nextTick, watchEffect } from 'vue';
import { usePathToObject } from '../../../utils/usePathToObject';
import { clone, isFunction } from 'lodash';

import validator from 'async-validator';
import { useSize } from '../useSize';
import { formItemContextKey } from '../useContext';

import { useFormContext } from '../useContext';
import { Arrayable } from 'vitest';

import type { Rules } from '../form/form';
import type { FormValidateFailure } from '../context';
import type { validateState, FormItemProps } from './formItem';
import type { FormContext, FormItemContext } from '../context';
import { componentSizeMap } from '../../utils/size';

const props = withDefaults(defineProps<FormItemProps>(), {
  size: 'default',
});

const formContext = <FormContext>useFormContext();
const formItemRef = ref();
const validateMessage = ref('');

const validationState = ref<validateState>('unchecked');
const itemSize = useSize('form');

let isResettingField = false;
const dataHandle = usePathToObject();
let initFieldValue: any = clone(dataHandle.getValueByPath(formContext?.model, props?.prop!));

const labelWidth = computed(() => {
  return props.labelWidth ? props.labelWidth : formContext?.labelWidth ? formContext?.labelWidth : '90px';
});

const itemBoxHeight = computed(() => {
  return componentSizeMap[props.size] + 'px';
});

const isRequired = computed(() => {
  const val = dataHandle.getValueByPath(formContext?.rules!, props?.prop!);
  console.log(props.required);

  if (props.required) {
    return '*';
  }

  if (!props.required && typeof val === 'undefined') {
    return ' ';
  }

  const ruleRequired = Array.isArray(val)
    ? val.filter((rule) => {
        return rule.required;
      })
    : val.hasOwnProperty('required');

  return ruleRequired || props.required ? '*' : '';
});

watchEffect(() => {
  console.log(isRequired.value);
});

const formData = computed(() => {
  return dataHandle.getValueByPath(formContext.model!, props.prop!);
});

const fieldForRule = computed(() => {
  return formContext.getRule(formContext.rules!, props.prop!);
});

const resetField = async () => {
  const model = formContext?.model;
  if (!model || !props.prop) return;

  dataHandle.setValueByPath(formContext.model, props.prop, initFieldValue);
  isResettingField = true;
  await nextTick();
  clearValidate();
  isResettingField = false;
};

const clearValidate: FormItemContext['clearValidate'] = () => {
  setValidationState('unchecked');
  validateMessage.value = '';
  isResettingField = false;
};

const setValidationState = (state: validateState) => {
  validationState.value = state;
};

const onValidationSucceeded = () => {
  setValidationState('success');
  validateMessage.value = '';
  formContext?.emit('validate', props.prop!, true, '');
};

const onValidationFailed = (error: FormValidateFailure) => {
  const { errors, fields } = error;
  if (!errors || !fields) {
    console.error(error);
  }

  setValidationState('error');
  validateMessage.value = errors ? errors?.[0]?.message ?? `${props.prop} is required` : '';
  formContext?.emit('validate', props.prop!, false, validateMessage.value);
};

const doValidate = async (rules: Arrayable<Rules>) => {
  const prop = props.prop![props.prop!.length - 1];
  const validater = new validator({
    [prop]: rules,
  });
  return validater
    .validate({ [prop!]: formData.value }, { firstFields: true })
    .then(() => {
      onValidationSucceeded();
      return true;
    })
    .catch((err) => {
      onValidationFailed(err);
      return Promise.reject(err);
    });
};

const validate: FormItemContext['validate'] = async (trigger, callback) => {
  if (isResettingField || typeof props.prop === 'undefined') {
    return false;
  }
  const hasCallback = isFunction(callback);

  const resultForRule = formContext?.filterRule(fieldForRule.value, trigger);
  if (Array.isArray(resultForRule) && resultForRule.length === 0) {
    callback?.(true);
    return true;
  }

  return doValidate(resultForRule)
    .then((val) => {
      callback?.(true);
      return true;
    })
    .catch(({ fields }) => {
      callback?.(false, fields);
      return hasCallback ? false : Promise.reject(fields);
    });
};

const context: FormItemContext = reactive({
  ...toRefs(props),
  el: formItemRef,
  validationState,
  resetField,
  clearValidate,
  validate,
});

provide(formItemContextKey, context);

onMounted(() => {
  formContext?.addField(context);
});

onBeforeUnmount(() => {
  formContext?.removeField(context);
});

defineExpose({
  size: props.size,
  validateMessage,
  validationState,
  validate,
  resetField,
  clearValidate,
});
</script>

<style module lang="postcss">
.z-form-item {
  @apply flex mb-3 items-center flex-wrap;
  height: v-bind(itemBoxHeight);

  > :nth-child(2) {
    height: v-bind(itemSize);
  }
}

.z-form-item-label {
  @apply text-right pr-1 box-border;
  width: v-bind(labelWidth);

  &::before {
    @apply text-red-600;
    content: attr(required);
  }
}

.z-form-item-message {
  @apply basis-full text-error h-5;
  margin-left: v-bind(labelWidth);
}
</style>
