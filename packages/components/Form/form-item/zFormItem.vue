<template>
    <div :class="[$style['z-form-item']]" ref="formItemRef">
        <label :class="[$style['z-form-item-label']]" :isRequired="isRequired">{{ props.label }}</label>
        <slot></slot>
        <span :class="[$style['z-form-item-message']]">{{ validateMessage }}</span>
    </div>
</template>

<script setup lang="ts">
import { computed, provide, reactive, toRefs, ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { FormItemProps } from './form-item';
import validator from 'async-validator';
import { formItemContextKey } from '../key';
import { useSize } from '../useSize';
import { useFormContext } from "../useContext"
import { Rule } from '../form/form';
import { Arrayable } from 'vitest';
import type { FormValidateFailure } from '../context';
import type { validateState } from './form-item';
import type { FormContext, FormItemContext } from '../context';
import { clone, isFunction } from "lodash"
import { usePathToObject } from '../../../utils/usePathToObject';

const props = defineProps(FormItemProps);
const formItemRef = ref();
const formContext = <FormContext>useFormContext();
const validateMessage = ref('');
const validationState = ref<validateState>('unchecked');
const itemSize = useSize('form');
let isResettingField = false;
const dataHandle = usePathToObject()

let initFieldValue: any = clone(dataHandle.getValueByPath(formContext?.model, props?.prop!));

const labelWidth = computed(() => {
    return props.labelWidth ? props.labelWidth : formContext?.labelWidth ? formContext?.labelWidth : '90px'
})

const itemBoxHeight = computed(() => {
    const val = <string>itemSize.value.match(/\d+/)?.[0];
    return parseInt(val) + 20 + 'px'
})

const isRequired = computed(() => {
    const val = dataHandle.getValueByPath(formContext?.rules!, props?.prop!);
    if (typeof val === "undefined") {
        return
    }
    const ruleRequired = Array.isArray(val) ? val.filter(rule => {
        return rule.required;
    }) : val.hasOwnProperty('required');
    let findRequired = props.hasOwnProperty('required') ? true : false;
    return ruleRequired || findRequired ? '*' : '';
})

const formData = computed(() => {
    return dataHandle.getValueByPath(formContext.model!, props.prop!)
})

const fieldForRule = computed(() => {
    return formContext.getRule(formContext.rules!, props.prop!)
})

const resetField = async () => {
    const model = formContext?.model
    if (!model || !props.prop) return

    /**
     * const a = {
        as: [{ a: 0 }]
       }
       a.as[0].a
     * 
    */
    dataHandle.setValueByPath(formContext.model, props.prop, initFieldValue)
    isResettingField = true
    await nextTick()
    clearValidate()
    isResettingField = false
}

const clearValidate: FormItemContext['clearValidate'] = () => {
    setValidationState('unchecked')
    validateMessage.value = ''
    isResettingField = false
}

const setValidationState = (state: validateState) => {
    validationState.value = state;
}

const onValidationSucceeded = () => {
    setValidationState('success')
    validateMessage.value = ''
    formContext?.emit('validate', props.prop!, true, '')
}

const onValidationFailed = (error: FormValidateFailure) => {
    const { errors, fields } = error
    if (!errors || !fields) {
        console.error(error)
    }

    setValidationState('error')
    validateMessage.value = errors
        ? errors?.[0]?.message ?? `${props.prop} is required`
        : ''

    formContext?.emit('validate', props.prop!, false, validateMessage.value)
}

const doValidate = async (rules: Arrayable<Rule>) => {
    const prop = props.prop![props.prop!.length - 1]
    const validater = new validator({
        [prop]: rules
    });
    return validater.validate({ [prop!]: formData.value }, { firstFields: true }).then(() => {
        onValidationSucceeded()
        return true
    }).catch((err) => {
        onValidationFailed(err)
        return Promise.reject(err)
    });

}

const validate: FormItemContext['validate'] = async (trigger, callback) => {
    if (isResettingField || typeof props.prop === "undefined") {
        return false
    }
    const hasCallback = isFunction(callback);

    const resultForRule = formContext?.filterRule(fieldForRule.value, trigger);
    if (Array.isArray(resultForRule) && resultForRule.length === 0) {
        callback?.(true)
        return true
    }

    return doValidate(resultForRule).then(val => {
        callback?.(true)
        return true
    }).catch(({ fields }) => {
        callback?.(false, fields)
        return hasCallback ? false : Promise.reject(fields)
    })
}

const context: FormItemContext = reactive({
    ...toRefs(props),
    $el: formItemRef,
    validationState,
    resetField,
    clearValidate,
    validate,
})
provide(formItemContextKey, context)

onMounted(() => {
    formContext?.addField(context)
})

onBeforeUnmount(() => {
    formContext?.removeField(context)
})

defineExpose({
    size: props.size,
    validateMessage,
    validationState,
    validate,
    resetField,
    clearValidate
})
</script>

<style module lang="postcss">
.z-form-item {
    @apply flex mb-3 items-center flex-wrap;
    height: v-bind(itemBoxHeight);

    >:nth-child(2) {
        height: v-bind(itemSize)
    }
}

.z-form-item-label {
    @apply text-right pr-1 box-border;
    width: v-bind(labelWidth);

    &::before {
        @apply text-red-600;
        content: attr(isRequired)
    }
}

.z-form-item-message {
    @apply basis-full text-error h-5;
    margin-left: v-bind(labelWidth);
}
</style>