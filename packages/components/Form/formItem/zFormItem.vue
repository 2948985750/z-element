<template>
  <div :class="[$style['z-form-item']]" ref="formItemRef">
    <label
      :class="[$style['z-form-item-label'], isRequired ? $style['z-form-item-label--before'] : '']"
      :required="isRequired"
      >{{ props.label }}</label
    >
    <slot></slot>
    <span :class="[$style['z-form-item-message']]">{{ validateMessage }}</span>
  </div>
</template>
<script setup lang="ts">
//
import {
  computed,
  provide,
  reactive,
  toRefs,
  ref,
  onMounted,
  onBeforeUnmount,
  nextTick,
  watchEffect,
  withCtx,
} from 'vue';
import { ensureArray, isString } from '../../../utils/basicUtilityFunctions';
import { usePathToObject } from '../../../utils/usePathToObject';
import { clone, cloneDeep, isFunction } from 'lodash';
import Validator from 'async-validator';

import { useSize } from '../useSize';
import { formItemContextKey } from '../useContext';
import { useFormContext } from '../useContext';

import type { Arrayable } from 'vitest';
import type { Rules, Trigger } from '../form/form';
import type { ValidateState, FormItemProps } from './formItem';

import type { FormContext, FormItemContext, FormValidateFailure } from '../context';
import { componentSizeMap } from '../../utils/size';

const props = withDefaults(defineProps<FormItemProps>(), {
  size: 'default',
});

const itemSize = useSize('form');
const formContext = <FormContext>useFormContext();
const formItemRef = ref<HTMLDivElement>();
const validateMessage = ref('');
const validationState = ref<ValidateState>('unchecked');

let isReseted = false;
let initFieldValue: any = clone(usePathToObject(formContext?.model, props?.prop).val);

const labelWidth = computed(() => {
  return props.labelWidth ? props.labelWidth : formContext?.labelWidth ? formContext?.labelWidth : '90px';
});

const itemBoxHeight = computed(() => {
  return componentSizeMap[props.size] + 'px';
});

const normalizedRules = computed(() => {
  const { required } = props;
  const rules: Rules[] = [];

  if (props.rules && typeof props.rules === 'object') {
    rules.push(...ensureArray(props.rules));
  }

  const formRules = formContext.rules && usePathToObject(formContext.rules, props.prop);

  if (formRules?.val) {
    // formRules 能为真说明必定有props.prop
    rules.push(...ensureArray(formRules.val));
  }

  if (required) {
    const requiredItems = rules.filter((rule) => {
      return rule.required;
    });

    requiredItems.length > 0 ? rules.push(...requiredItems) : rules.push({ required: true, trigger: 'blur' });
  }

  return rules;
  // 返回来自form和formItem中的与当前prop相关的rules
});

const isRequired = computed(() => {
  return normalizedRules.value.some((v) => v.required);
});

const getCurrentItemModel = computed(() => {
  if (!formContext.model || !props.prop) {
    return;
  }

  return usePathToObject(formContext.model, props.prop).val;
});

const setValidationState = (state: ValidateState) => {
  validationState.value = state;
};

const filterRules = (trigger: Trigger) => {
  const _rules = normalizedRules.value;
  return _rules.filter((rule) => {
    if (!rule.trigger || !trigger) {
      return true;
    }

    if (Array.isArray(rule.trigger)) {
      return rule.trigger.includes(trigger);
    }

    return rule.trigger === trigger;
  });
};

const propString = computed(() => {
  if (!props.prop) return '';
  return isString(props.prop) ? props.prop : props.prop.join('.');
});

const onValidationFailed = (error: FormValidateFailure) => {
  const { errors, fields } = error;
  if (!errors || !fields) {
    console.error(error);
  }

  setValidationState('error');
  validateMessage.value = errors ? errors?.[0]?.message ?? `${props.prop} is required` : '';
  formContext?.emit('validate', props.prop!, false, validateMessage.value);
};

const doValidate = async (rules: Rules[]) => {
  const modelProp = propString.value;
  const asyncValidator = new Validator({ [modelProp]: rules });

  return asyncValidator
    .validate({ [modelProp]: getCurrentItemModel.value }, { firstFields: true })
    .then((v) => {
      setValidationState('success');
      validateMessage.value = '';
      return true;
    })
    .catch((err: FormValidateFailure) => {
      onValidationFailed(err);
      return Promise.reject(err);
    });
};

const validate: FormItemContext['validate'] = async (trigger, callback) => {
  const isFn = isFunction(callback);

  if (!props.prop || isReseted) {
    return false;
  }

  if (normalizedRules.value.length === 0) {
    isFn && callback(false);
    return false;
  }

  const _rules = filterRules(trigger);
  if (_rules.length === 0) {
    isFn && callback(true);
    return true;
  }

  setValidationState('validating');

  return doValidate(_rules)
    .then((a) => {
      isFn && callback(true);
      return true;
    })
    .catch((error: FormValidateFailure) => {
      isFn && callback(false, error.fields);
      return isFn ? false : Promise.reject(error.fields);
    });
};

const resetField: FormItemContext['resetField'] = () => {};
const clearValidate: FormItemContext['clearValidate'] = () => {};

const context: FormItemContext = reactive({
  ...toRefs(props),
  el: formItemRef.value,
  validate,
  validationState,
  resetField,
  clearValidate,
});

provide(formItemContextKey, context);

defineExpose({
  size: props.size,
  validateMessage,
  validationState,
  validate,
  resetField,
  clearValidate,
});

onMounted(() => {
  formContext?.addValidateItem(context);
});

onBeforeUnmount(() => {
  formContext?.removeValidateItem(context);
});

watchEffect(() => {
  if (validationState.value === 'success') {
    validateMessage.value = '';
  }
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
}

.z-form-item-label--before::before {
  @apply text-red-600;
  content: '*';
}

.z-form-item-message {
  @apply basis-full text-error h-5;
  margin-left: v-bind(labelWidth);
}
</style>
