<template>
  <div class="z-radio-wrapper">
    <template v-for="opt in props.options" :key="opt.key">
      <Option :label="opt.label" :disabled="opt.disabled" :name="props.name"></Option>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, provide, reactive, ref, watch } from 'vue';
import { useComponentSize } from '../../../hooks';
import { useSize } from '../../utils/size';
import Option from './radio-base.vue';
import { RadioProps, RadioEmit, RadioContext, radioKey, RadioItemContext } from './radio';
import { useFormContext, useFormItemContext } from '../useContext';

const props = withDefaults(defineProps<RadioProps>(), {
  size: 'default',
});

const emit = defineEmits<RadioEmit>();
const radioItems: RadioItemContext[] = [];
const radioChecked = ref<RadioProps['modelValue']>(props.modelValue);

const formContext = useFormContext();
const formItemContent = useFormItemContext();

console.log(formContext?.size);
console.log(formItemContent?.size);

const comSizeNumber = useComponentSize(props.size);
const size = useSize(comSizeNumber, 'px');

const setCheckedOpt: RadioContext['setCheckedOpt'] = (val) => {
  radioChecked.value = val;
};
const addRadioOption: RadioContext['addRadioOption'] = (item) => {
  !radioItems.includes(item) && radioItems.push(item);
};
const removeRadioOption: RadioContext['removeRadioOption'] = (item) => {
  const index = radioItems.indexOf(item);
  if (index !== -1) {
    radioItems.splice(index, 1);
  }
};

provide(radioKey, {
  ...reactive(props),
  size: comSizeNumber,
  setCheckedOpt,
  addRadioOption,
  removeRadioOption,
});

onMounted(() => {
  radioItems.forEach((item) => {
    if (item.label === props.modelValue) {
      item.switchChecked(true);
    }
  });
});

watch(
  () => radioChecked.value,
  (old, _new) => {
    if (radioChecked.value !== '' || typeof radioChecked.value !== 'undefined') {
      radioItems.forEach((val) => {
        val.switchChecked(false);
      });
      const item = radioItems.filter((val) => val.label === radioChecked.value);
      item[0].switchChecked(true);
      emit('update:modelValue', radioChecked.value);
      emit('change', radioChecked.value);

      formItemContent?.validate('change');
    }
  }
);
</script>

<style lang="postcss" scoped>
.z-radio-wrapper {
  @apply flex select-none;
  height: v-bind('size');
}
</style>
