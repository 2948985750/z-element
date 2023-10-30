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
        <checkedIconCheckbox></checkedIconCheckbox>
      </template>
      <template v-else>
        <uncheckIconChechbox></uncheckIconChechbox>
      </template>
    </span>

    <input
      type="checkbox"
      :disabled="isDisabled"
      class="z-element-input"
      ref="input"
      @change="checkChange"
      v-bind="$attrs"
    />
    {{ props.label }}
  </label>
</template>
<script setup lang="ts">
import { onMounted, ref, computed, inject, onUnmounted } from 'vue';
import { useChecked } from '../hooks/useState';
import checkedIconCheckbox from '../components/checkedIcon-checkbox.vue';
import uncheckIconChechbox from '../components/uncheckIcon-chechbox.vue';
import { CheckBoxItemContext, checkboxKey } from '../checkBox/checkbox';
import { useSize } from '../../utils/size';

interface _Event extends Event {
  [key: string]: any;
}

export interface SelectableProps {
  label: string | number;
  disabled: boolean;
}

const props = withDefaults(defineProps<SelectableProps>(), {
  disabled: false,
});

const input = ref<HTMLInputElement>();
const { checked, switchChecked } = useChecked();
const ctx = inject(checkboxKey);
const size = useSize(ctx?.size!, 'px', 1.5);

const isDisabled = computed(() => {
  return ctx?.disabled || props.disabled;
});

const checkChange = (e: _Event) => {
  checked.value = (e.target as any).checked;
  if ((e.target as any).checked) {
    ctx?.addCheckedOpt(props.label);
  } else {
    ctx?.removeCheckedOpt(props.label);
  }
};

const checkboxContext: CheckBoxItemContext = {
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
