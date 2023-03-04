<template>
  <button :type="props.action" :disabled="props.disabled"
    :class="[ctx.element('button'), ctx.element('button', props.type)]">
    <span>
      <slot></slot>
    </span>
    <span>
      <slot name=""></slot>
    </span><span>
      <slot name=""></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { bemBlock } from "../../utils/bem";

interface ButtonProps {
  type?:
  | "primary"
  | "success"
  | "info"
  | "wraning"
  | "danger"
  | "plain"
  | "text";
  size?: "default" | "small" | "large";
  disabled?: boolean;
  action?: "button" | "submit" | "reset";
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  bg?: boolean;
  color?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "plain",
  size: "default",
  disabled: false,
  action: "button",
  plain: false,
  round: false,
  circle: false,
  bg: true,
});

const ctx = bemBlock("z");
</script>

<style scoped lang="postcss">
@import "./button.css";
</style>
