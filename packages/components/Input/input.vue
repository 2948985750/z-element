<template>
  <div
    :class="[$style['z-input-context']]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    v-show="props.type !== 'hidden'"
  >
    <template v-if="props.type !== 'textarea'">
      <div v-if="slots.prepend">
        <slot name="prepend"></slot>
      </div>

      <div
        :class="[
          $style['z-input-element'],
          block.is($style['validate-error'], formItemContext?.validationState === 'error'),
          block.is($style['z-input-content--disabled'], props.disabled),
        ]"
      >
        <span :class="[$style['z-input-element--prefix']]">
          <slot name="prefix">
            <AcademicCapIcon />
          </slot>
        </span>
        <input
          :class="[block.is($style['z-input-content--disabled'], props.disabled)]"
          ref="inputRef"
          v-bind="attrs"
          :type="changeInputType"
          :value="props.modelValue"
          :disabled="props.disabled"
          :readonly="props.readonly"
          @input="inputHandle"
          @focus="focusHanlde"
          @blur="blurHandle"
          @change="changeHandle"
          @clear="clearInput"
          @compositionstart="handleCompositionStart"
          @compositionend="handleCompositionEnd"
          @compositionupdate="handleCompositionUpdate"
        />

        <span :class="[$style['z-input-element--suffix']]">
          <slot name="suffix">
            <AcademicCapIcon />
          </slot>
          <span></span>
        </span>
        <span :class="[$style['z-input-element--clearable']]" v-if="isClearable" @click="clearInput">
          <XMarkIcon />
        </span>
        <span v-if="isShowPassWord" :class="[$style['z-input-element--showpwd']]" @click="isShowState = !isShowState">
          <component :is="isShowState ? EyeIcon : EyeSlashIcon" />
        </span>
      </div>
      <div v-if="slots.append">
        <slot name="append"></slot>
      </div>
    </template>
    <template v-else>
      <textarea
        :class="[$style['z-input-element-textarea']]"
        ref="textarea"
        :style="textareaStyle"
        v-bind="attrs"
        :modelValue="props.modelValue"
        :readonly="props.readonly"
        @input="inputHandle"
        @focus="focusHanlde"
        @blur="blurHandle"
        @change="changeHandle"
        @clear="clearInput"
        @compositionstart="handleCompositionStart"
        @compositionend="handleCompositionEnd"
        @compositionupdate="handleCompositionUpdate"
      ></textarea>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useSlots, useAttrs, ref, computed, watch, nextTick, shallowRef, reactive, onMounted } from 'vue';
import { InputProps, inputEmits, TextAreaSize } from './input';
import { useFormItemContext } from '../Form/useContext';
import { nameSpace } from '../../utils/bem';
import { useSize } from '../Form/useSize';
import { componentSizeMap } from '../types-util/size';
import { debugWarn } from '../../utils/warn';
import { AcademicCapIcon, XMarkIcon, EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/solid';
import { isNil, isObject } from 'lodash';
import { isKorean } from '../../utils/i18n';

const block = nameSpace();
const slots = useSlots();
const props = defineProps(InputProps);

const emit = defineEmits(inputEmits);
const attrs = useAttrs();

const formItemContext = useFormItemContext();

const isShowState = ref(false);
const inputRef = ref();
const mouseover = ref(false);
const isComposing = ref(false);

const textareaStyle = reactive({
  resize: props.resize,
  height: '',
  overflowY: 'hidden',
});

const input = shallowRef<HTMLInputElement>();
const textarea = shallowRef<HTMLTextAreaElement>();

const _ref = computed(() => input.value || textarea.value);
let prevScrollHeight: number = 0;
onMounted(() => {
  prevScrollHeight = textarea.value?.scrollHeight!;
  console.log(prevScrollHeight);
});
const isDisabled = computed(() => {
  return props.disabled;
});

const modelValue = computed(() => {
  return typeof props.modelValue !== 'undefined' && props.modelValue !== '';
});

const isClearable = computed(() => {
  return !isDisabled.value && !props.readonly && modelValue.value && props.clearable && mouseover.value;
});

const changeInputType = computed(() => {
  if (props.type === 'password') {
    if (isShowState.value) {
      return 'text';
    } else {
      return 'password';
    }
  }
  return props.type;
});

const isShowPassWord = computed(() => {
  return !isDisabled.value && !props.readonly && modelValue.value && props.showPassWord === true;
});

const size = computed(() => {
  return props.size ? componentSizeMap[props.size].toString() : useSize('formItem').value;
});

const boxHight = computed(() => {
  const size_ = parseInt(<string>(size.value as string).match(/\d+/)?.[0]) + 4;
  return size_ + 'px';
});

const nativeInputValue = computed(() => (isNil(props.modelValue) ? '' : String(props.modelValue)));

const setNativeInputValue = () => {
  const input = _ref.value;
  if (!input || input.value === nativeInputValue.value) return;
  input.value = nativeInputValue.value;
};

const onMouseEnter = () => {
  mouseover.value = true;
};

const onMouseLeave = () => {
  mouseover.value = false;
};

const inputHandle = (e: Event) => {
  let { value } = e.target as HTMLInputElement | HTMLTextAreaElement;
  if (props.formatter) {
    value = props.parser ? props.parser(value) : value;
    value = props.formatter(value);
  }
  if (isComposing.value) return;

  // hack for https://github.com/ElemeFE/element/issues/8548
  // should remove the following line when we don't support IE
  if (value === nativeInputValue.value) {
    setNativeInputValue();
    return;
  }
  emit('update:modelValue', value);
  formItemContext?.validate('input');
  nextTick(() => setNativeInputValue());
};

const changeHandle = (e: Event) => {
  emit('change', (e as any).target.value);
  formItemContext?.validate('change');
};

const focusHanlde = (e: Event) => {
  emit('focus', (e as any).target.value);
  formItemContext?.validate('focus');
};

const blurHandle = (e: Event) => {
  emit('blur', (e as any).target.value);
  formItemContext?.validate('blur');
  if (props.validateEvent) {
    formItemContext?.validate?.('blur').catch((err) => debugWarn(err));
  }
};

const handleCompositionStart = (event: CompositionEvent) => {
  emit('compositionstart', event);
  isComposing.value = true;
};

const handleCompositionUpdate = (event: CompositionEvent) => {
  emit('compositionupdate', event);
  const text = (event.target as HTMLInputElement)?.value;
  const lastCharacter = text[text.length - 1] || '';
  isComposing.value = !isKorean(lastCharacter);
};

const handleCompositionEnd = (event: CompositionEvent) => {
  emit('compositionend', event);
  if (isComposing.value) {
    isComposing.value = false;
    inputHandle(event);
  }
};

const clearInput = () => {
  emit('update:modelValue', '');
  emit('change', '');
  emit('clear');
  emit('input', '');
  inputRef.value.focus();
};

const focus = () => {
  _ref.value?.focus();
};

const blur = () => {
  _ref.value?.blur();
};

const select = () => {
  _ref.value?.select();
};

const calcTextAreaStyle = (textareaEle: HTMLTextAreaElement, minRows = 1, maxRows?: number) => {
  const cssStyle = getComputedStyle(textareaEle);
  const sizing = cssStyle.getPropertyValue('box-sizing');
  const paddingSize =
    parseInt(cssStyle.getPropertyValue('padding-top')) + parseInt(cssStyle.getPropertyValue('padding-bottom'));

  const borderSize =
    parseFloat(cssStyle.getPropertyValue('border-bottom-width')) +
    parseFloat(cssStyle.getPropertyValue('border-top-width'));

  const fontSize = parseFloat(cssStyle.getPropertyValue('font-size')) + 3;

  let height = parseFloat(cssStyle.getPropertyValue('height'));

  let maxHeight = fontSize * maxRows!;

  if (sizing === 'border-box') {
    maxHeight = borderSize + fontSize * maxRows!;
  } else if (sizing === 'content-box') {
    maxHeight = paddingSize + fontSize * maxRows!;
  }
  console.log(prevScrollHeight, textareaEle.scrollHeight, maxHeight);
  if (textareaEle.scrollHeight > prevScrollHeight && textareaEle.scrollHeight <= maxHeight) {
    prevScrollHeight = textareaEle.scrollHeight;
    height = textareaEle.scrollHeight;
  }
  return {
    height: height + 'px',
  };
};
const resizeTextarea = () => {
  const { type, autosize } = props;
  if (type !== 'textarea' || !textarea.value) return;

  if (autosize && isObject(autosize)) {
    const style = calcTextAreaStyle(textarea.value, autosize.minRows, autosize.maxRows);
    textareaStyle.height = style.height;
    // nextTick
  }
};

// const createOnceInitResize = (resizeTextarea: () => void) => {
//   let isInit = false;
//   return () => {
//     if (isInit || !props.autosize) return;
//     const isElHidden = textarea.value?.offsetParent === null;
//     if (!isElHidden) {
//       resizeTextarea();
//       isInit = true;
//     }
//   };
// };

watch(
  () => props.modelValue,
  () => {
    nextTick(() => resizeTextarea());
    if (props.validateEvent) {
      formItemContext?.validate?.('change').catch((err) => debugWarn(err));
    }
  }
);
watch(
  () => props.type,
  async () => {
    await nextTick();
    setNativeInputValue();
    resizeTextarea();
  }
);

watch(
  () => props.modelValue,
  () => {
    resizeTextarea();
  }
);

defineExpose({
  clearInput,
  focus,
  blur,
  input,
  textarea,
  ref: _ref,
  select,
});
</script>

<style module lang="postcss">
.z-input-context {
  @apply flex flex-1 items-center box-border;
  height: v-bind(boxHight);
}

.z-input-element {
  @apply flex items-center align-middle flex-grow flex-shrink-0 h-full;
  @apply border-solid border border-border_color rounded transition-colors;

  &:hover {
    @apply border-primary;
  }

  > input {
    @apply outline-none flex-1 appearance-none border-none h-5/6 caret-black align-middle;
  }

  > .z-input-element--prefix {
    @apply w-4 h-3/5 mx-1 align-top;
  }

  > .z-input-element--suffix {
    @apply w-4 h-3/5 px-1 align-top;
  }

  > .z-input-element--clearable {
    @apply w-4 h-3/5 px-1 align-top;
  }

  > .z-input-element--showpwd {
    @apply w-4 h-3/5 px-1 align-top;
  }
}

.icon {
  @apply w-4 h-3/5 px-1 align-top;
}

.validate-error {
  @apply border-error;
}

.z-input-content--disabled {
  @apply bg-info_light_9 border-info_light_7;

  &:hover {
    @apply border-info_light_7 cursor-not-allowed;
  }
}

.z-input-element-textarea {
  @apply w-full;
  resize: v-bind('props.resize');
}
</style>
