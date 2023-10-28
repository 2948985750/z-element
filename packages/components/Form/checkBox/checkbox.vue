<template>
  <div class="z-checkbox-wrapper">
    <template v-for="opt in props.options" :key="opt.key">
      <Option type="checkbox" :label="opt.label" :disabled="opt.disabled"></Option>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, reactive, onMounted, watch, watchEffect, nextTick } from 'vue';
import { useFormItemContext } from '../useContext';
import { useComponentSize } from '../../../hooks/index';
import Option from '../components/selectable.vue';
import { checkboxKey } from './checkbox';
import type { CheckBoxProps, CheckboxContext, CheckBoxOptionContext, CheckBoxEmit } from './checkbox';
import { useSize } from '../../utils/size';

const props = withDefaults(defineProps<CheckBoxProps>(), {
  size: 'default',
});
const emit = defineEmits<CheckBoxEmit>();
const comSizeNumber = useComponentSize(props.size);
const size = useSize(comSizeNumber, 'px');
const selectItems: CheckBoxOptionContext[] = [];
const selectedOpt = ref<CheckBoxProps['modelValue']>(props.modelValue);
const ctx = useFormItemContext();

const addCheckBoxOption: CheckboxContext['addCheckBoxOption'] = (option) => {
  selectItems.push(option);
};

const removeCheckBoxOption: CheckboxContext['removeCheckBoxOption'] = (opt) => {
  selectItems.splice(selectItems.indexOf(opt), 1);
};

const addCheckedOpt: CheckboxContext['addCheckedOpt'] = (val) => {
  if (selectedOpt.value.includes(val)) {
    return;
  }
  selectedOpt.value.push(val);
};

const removeCheckedOpt: CheckboxContext['removeCheckedOpt'] = (val) => {
  const index = selectedOpt.value.indexOf(val);
  if (index !== -1) {
    selectedOpt.value.splice(index, 1);
  }
};

onMounted(() => {
  props.modelValue.forEach((selected) => {
    selectItems.forEach((optCtx) => {
      if (selected === optCtx.label && !optCtx.checked.value) {
        optCtx.switchChecked(true);
      }
    });
  });
});

watch(selectedOpt.value, (old, _new) => {
  emit('update:modelValue', [..._new]);
  emit('change', [..._new]);
  nextTick(() => {
    ctx?.validate('change');
  });
});

provide(checkboxKey, {
  ...reactive(props),
  size: comSizeNumber,
  addCheckBoxOption,
  removeCheckBoxOption,
  addCheckedOpt,
  removeCheckedOpt,
});
</script>

<style lang="postcss" scoped>
.z-checkbox-wrapper {
  @apply flex select-none;
  height: v-bind('size');
}
</style>
