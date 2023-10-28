<template>
  <label :class="['z-element-option', isDisabled ? 'z-element-option--disabled' : '']">
    <span v-if="$props.type === 'checkbox'" class="z-element-option-icon">
      <template v-if="checked">
        <checkedIconCheckbox></checkedIconCheckbox>
      </template>
      <template v-else>
        <uncheckIconChechbox></uncheckIconChechbox>
      </template>
    </span>
    <span v-else-if="$props.type === 'radio'" class="z-element-option-icon">
      <template v-if="checked">
        <checkedIconRadio></checkedIconRadio>
      </template>
      <template v-else>
        <uncheckIconRadio></uncheckIconRadio>
      </template>
    </span>
    <input
      :disabled="isDisabled"
      class="z-element-input"
      ref="input"
      type="checkbox"
      @change="checkChange"
      v-bind="$attrs"
    />
    {{ props.label }}
  </label>
</template>
<script setup lang="ts">
import { onMounted, ref, computed, inject, onUnmounted, watch, useSlots } from 'vue';
import checkedIconCheckbox from './checkedIcon-checkbox.vue';
import uncheckIconChechbox from './uncheckIcon-chechbox.vue';
import checkedIconRadio from './checkedIcon-radio.vue';
import uncheckIconRadio from './uncheckIcon-radio.vue';
import { CheckBoxOptionContext, checkboxKey } from '../checkBox/checkbox';
import { useSize } from '../../utils/size';

interface _Event extends Event {
  [key: string]: any;
}

interface SelectableProps {
  type: 'checkbox' | 'radio';
  label: string | number;
  disabled: boolean;
}

const props = withDefaults(defineProps<SelectableProps>(), {
  disabled: false,
});

const input = ref<HTMLInputElement>();

const checked = ref(false);
const ctx = inject(checkboxKey);
const size = useSize(ctx?.size!, 'px', 1.5);

const isDisabled = computed(() => {
  return ctx?.disabled || props.disabled;
});

const switchChecked = (isChecked?: boolean) => {
  if (typeof isChecked === 'boolean') {
    checked.value = isChecked;
    return;
  }
  checked.value = !checked.value;
};

const checkChange = (e: _Event) => {
  checked.value = (e.target as any).checked;
  if ((e.target as any).checked) {
    ctx?.addCheckedOpt(props.label);
  } else {
    ctx?.removeCheckedOpt(props.label);
  }
};

const checkboxContext: CheckBoxOptionContext = {
  switchChecked,
  label: props.label,
  checked,
};

onMounted(() => {
  ctx?.addCheckBoxOption(checkboxContext);
});

onUnmounted(() => {
  ctx?.removeCheckBoxOption(checkboxContext);
});

defineExpose(checkboxContext);
</script>
<style lang="postcss" scoped>
.z-element-option {
  @apply flex items-center mr-6 p-1 cursor-pointer;
}

.z-element-option--disabled {
  @apply cursor-not-allowed text-color_placeholder;
}
.z-element-input {
  @apply appearance-none hidden;
}

.z-element-option-icon {
  width: v-bind('size');
  height: v-bind('size');
}
</style>
