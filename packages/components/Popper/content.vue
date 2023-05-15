<template>
  <div
    ref="contentRef"
    v-bind="contentAttrs"
    :style="contentStyle"
    :class="contentClass"
    tabindex="-1"
    @mouseenter="(e) => $emit('mouseenter', e)"
    @mouseleave="(e) => $emit('mouseleave', e)"
  >
    <z-focus
      :trapped="trapped"
      :trap-on-focus-in="true"
      :focus-trap-el="contentRef"
      :focus-start-el="focusStartRef"
      @focus-after-trapped="onFocusAfterTrapped"
      @focus-after-released="onFocusAfterReleased"
      @focusin="onFocusInTrap"
      @focusout-prevented="onFocusoutPrevented"
      @release-requested="onReleaseRequested"
    >
      <slot></slot>
    </z-focus>
  </div>
</template>

<script setup lang="ts">
import { inject, onBeforeUnmount, onMounted, provide, ref, unref, watch } from 'vue';
import { isNil, isElement } from 'lodash';
import { formItemContextKey } from '../Form';
import { POPPER_CONTENT_INJECTION_KEY } from './constants';
import { popperContentEmits, popperContentProps } from './content';

import { usePopperContent, usePopperContentDOM, usePopperContentFocusTrap } from './hooks';

import zFocus from '../Focus-trap';
</script>

<style lang="scss" scoped></style>
