<template>
  <label
    :class="[
      'z-element-option',
      isDisabled ? 'z-element-option--disabled' : '',
      checked ? 'z-element-option--activate' : '',
    ]"
  >
    <span class="z-element-option-icon">
      <template v-if="checked">
        <checkedIconRadio></checkedIconRadio>
      </template>
      <template v-else>
        <uncheckIconRadio></uncheckIconRadio>
      </template>
    </span>
    <input
      :disabled="isDisabled"
      type="radio"
      class="z-element-input"
      ref="input"
      @change="checkChange"
      v-bind="$attrs"
    />
    {{ props.label }}
  </label>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref } from 'vue';
import { useChecked } from '../hooks/useState';
import { RadioItemContext, radioKey } from './radio';
import { useSize } from '../../utils/size';

import checkedIconRadio from '../components/checkedIcon-radio.vue';
import uncheckIconRadio from '../components/uncheckIcon-radio.vue';

interface _Event extends Event {
  [key: string]: any;
}

export interface SelectableProps {
  label: string | number;
  disabled?: boolean;
}

const { checked, switchChecked } = useChecked();
const props = withDefaults(defineProps<SelectableProps>(), {
  disabled: false,
});

const input = ref<HTMLInputElement>();
const ctx = inject(radioKey);
const size = useSize(ctx?.size!, 'px', 1.9);

const isDisabled = computed(() => {
  return props.disabled || ctx?.disabled;
});

const checkChange = (e: _Event) => {
  const checked = (e as any).target.checked;
  if (checked) {
    ctx?.setCheckedOpt(props.label);
  }
};

const expose: RadioItemContext = {
  label: props.label,
  checked,
  switchChecked,
};

onMounted(() => {
  ctx?.addRadioOption(expose);
});

onUnmounted(() => {
  ctx?.removeRadioOption(expose);
});

defineExpose(expose);
</script>

<style lang="postcss" scoped>
.z-element-option {
  @apply flex items-center mr-2 p-1 cursor-pointer;
}

.z-element-option--disabled {
  @apply cursor-not-allowed text-color_placeholder;
}
.z-element-input {
  @apply appearance-none hidden;
}

.z-element-option--activate {
  @apply text-primary;
}

.z-element-option-icon {
  @apply mr-1;
  width: v-bind('size');
  height: v-bind('size');
}
</style>
