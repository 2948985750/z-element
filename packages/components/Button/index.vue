<template>
  <button :type="defaultProps.action" :disabled="defaultProps.disabled"
    :class="[block.element('button'), block.element('button', (defaultProps as any).type)]">
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

<script lang="ts">
import { defineComponent } from "vue";
import { bemBlock } from "../../utils/bem";
import { withDefaultProps } from "../../utils/withDefaultProps"
import type { ButtonProps, ButtonBinding } from "./button.type";


export default /*#__PURE__*/ defineComponent<ButtonProps, ButtonBinding>({
  name: "ZButton",
  setup(props,) {
    const defaultProps = withDefaultProps<ButtonProps>(props, {
      type: "plain",
      size: "default",
      disabled: false,
      action: "button",
      plain: false,
      round: false,
      circle: false,
      bg: true,
    })
    const block = bemBlock("z");
    return {
      block,
      defaultProps
    }
  }
})
</script>

<style scoped lang="postcss">
@import "./button.css";
</style>
