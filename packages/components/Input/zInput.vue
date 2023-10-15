<template>
  <div class="z-input-wrapper">
    <div class="z-input-prefix-outside">
      <slot name="prefixOutside"></slot>
    </div>
    <div class="z-input-inner">
      <div class="z-input-prefix-inner">
        <slot name="prefixInner"></slot>
      </div>
      <input
        v-bind="attrs"
        class="z-input-element"
        :type="type"
        :value="props.modelValue"
        @change="changeHandle"
        @input="onInput"
        @focus="focusHandle"
        @blur="blurHandle"
      />
      <div class="z-input-suffix-inner">
        <slot name="suffixInner">
          <zIcon v-if="props.clearable"><XCircleIcon></XCircleIcon></zIcon>
        </slot>
        <zIcon @click="clearEmit" v-if="props.clearable" class="w-2">
          <XMarkIcon></XMarkIcon>
        </zIcon>
        <zIcon @click="changeDisplay" v-else class="w-2">
          <EyeIcon v-if="props.type === 'password' && props.showPassWord && pwdDisState"></EyeIcon>
          <EyeSlashIcon v-if="props.type === 'password' && props.showPassWord && !pwdDisState"></EyeSlashIcon>
        </zIcon>
      </div>
    </div>
    <div class="z-input-suffix-outside">
      <slot name="suffixOutside"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots, watchEffect, defineModel, computed, ref, onUpdated, useAttrs } from 'vue';
import { BackspaceIcon, XCircleIcon, EyeIcon, EyeSlashIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import zIcon from '../Icon';
import { componentSizeMap } from '../utils/size';
import { useFormItemContext } from '../Form/useContext';
import type { InputProps, InputEmits } from './zInput';

const modelValue = defineModel();
const attrs = useAttrs();
const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  showWordLimit: false,
  clearable: false,
  showPassWord: false,
  disabled: false,
  size: 'default',
  readonly: false,
  autocomplete: false,
});

onUpdated(() => {
  console.log(props);
});

const emit = defineEmits<InputEmits>();
const slots = useSlots();
const pwdDisState = ref(false);
const ctx = useFormItemContext();

console.log(ctx?.validationState);

const sizeForpx = computed(() => {
  return props.size ? componentSizeMap[props.size] + 'px' : ctx?.size + 'px';
});

const type = ref<InputProps['type']>(props.type);

function onInput(e: InputEvent) {
  emit('update:modelValue', e.target?.value);
  emit('input', e.target?.value);
}

function focusHandle(e) {
  emit('focus', e);
}

function blurHandle(e) {
  emit('blur', e);
}

function changeHandle(e) {
  emit('change', e);
}

function clearEmit() {
  emit('clear');
}

function changeDisplay() {
  if (pwdDisState.value) {
    type.value = 'text';
  } else {
    type.value = 'password';
  }
  pwdDisState.value = !pwdDisState.value;
}
</script>

<style lang="postcss" scoped>
.z-input-wrapper {
  @apply flex items-center border-info_light_7 border-solid rounded-md text-color_regular;
  height: v-bind(sizeForpx);
  border-width: 1px;
}

.z-input-inner {
  @apply flex items-center flex-auto;
}

.z-input-element {
  @apply border-none flex-1 outline-none appearance-none p-0 h-full;

  & [type='password']::-webkit-reveal {
    @apply hidden;
  }
}

.z-input-prefix-outside,
.z-input-suffix-outside {
  @apply px-1;
}
</style>
