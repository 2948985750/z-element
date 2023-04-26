<template>
  <button
    :type="props.nativeType"
    :disabled="props.disabled"
    :class="[
      $style['z-button'],
      $style[`z-button--${props.type}`],
      block.is($style['z-button--disabled'], props.disabled),
      block.is($style[`z-button--${props.type}--disabled`], props.disabled),
    ]"
    :style="btnStyle"
  >
    <span
      v-if="props.loading || props.icon"
      :class="[$style['z-button-slot'], block.is($style['rotate'], props.loading)]"
    >
      <slot name="icon">
        <component v-if="props.loading" :is="IconComponent"></component>
        <component v-else :is="props.icon"></component>
      </slot>
    </span>
    <span :class="$style['z-button-defaultSlots']">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import { nameSpace } from '../../utils/bem';
import { ButtonProps } from './button';
import { ArrowPathIcon } from '@heroicons/vue/24/solid';
import { componentSizeMap } from '../types-util/size';

const props = defineProps(ButtonProps);
const block = nameSpace();
const IconComponent = computed(() => (props.loadingIcon ? props.loadingIcon : ArrowPathIcon));
const btnStyle = computed(() => {
  if (props.round) {
    return {
      borderRadius: '1.5rem',
    };
  } else if (props.circle) {
    return {
      borderRadius: '50%',
    };
  }
});

const calcHeight = computed(() => {
  return componentSizeMap[props.size!] + 'px';
});

const calcPadding = computed(() => {
  return (componentSizeMap[props.size!] * 0.7) / 2 + 'px';
});
</script>

<style module lang="postcss">
.z-button {
  @apply flex box-border items-center leading-none text-center align-middle;
  @apply py-2 mx-1 rounded justify-center border-info border  border-solid;
  @apply outline-none appearance-none select-none transition-colors text-base;
  height: v-bind(calcHeight);
  padding-left: v-bind(calcPadding);
  padding-right: v-bind(calcPadding);
  > .z-button-slot {
    @apply w-5 h-5;
    order: 1;
  }
  > .z-button-defaultSlots {
    @apply flex items-center;
    order: 2;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rotate {
  animation-name: spin;
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@define-placeholder cursor-not-allowed {
  cursor: not-allowed;
}
.z-button--disabled {
  @extend cursor-not-allowed;
}

.z-button--primary {
  @apply bg-primary text-white border-primary;
  &:hover {
    @apply bg-primary_light_3 text-white;
  }
}

.z-button--plain {
  @apply bg-transparent text-zinc-900 border-info;
  &:hover {
    @apply text-primary border-primary;
  }
}

.z-button--success {
  @apply bg-success text-white border-success_light_3;
  &:hover {
    @apply bg-success_light_3;
  }
}

.z-button--info {
  @apply bg-info text-white border-info;
  &:hover {
    @apply bg-info_light_3;
  }
}

.z-button--warning {
  @apply bg-wraning text-white border-wraning;
  &:hover {
    @apply bg-wraning_light_3;
  }
}

.z-button--danger {
  @apply bg-danger text-white border-danger;
  &:hover {
    @apply bg-danger_light_3;
  }
}

.z-button--primary--disabled {
  @apply bg-primary_light_3;
}
.z-button--plain--disabled {
  @apply bg-slate-100 text-black;
  &:hover {
    @apply border-info_light_3 text-black;
  }
}

.z-button--success--disabled {
  @apply bg-success_light_3;
}

.z-button--info--disabled {
  @apply bg-info_light_3;
}

.z-button--warning--disabled {
  @apply bg-wraning_light_3;
}
.z-button--danger--disabled {
  @apply bg-danger_light_3;
}
</style>
