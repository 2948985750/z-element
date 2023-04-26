<template>
  <span :class="$style['z-link-context']" @mouseover="onMouseover">
    <a v-bind="attrs" :class="calcClass" :href="calcHref">
      <span v-if="props.icon">
        <zIcon> <component :is="props.icon" /> </zIcon>
      </span>
      <span v-else>
        <slot name="icon"></slot>
      </span>
      <span :class="$style['z-link-inner']">
        <slot></slot>
      </span>
    </a>
  </span>
</template>

<script setup lang="ts">
import { useAttrs, ref, computed, defineProps, useCssModule } from 'vue';
import zIcon from '../Icon';
import { nameSpace } from '../../utils/bem';
import { linkProps } from './zLink';

const block = nameSpace();
const attrs = useAttrs();
const props = defineProps(linkProps);
const className = useCssModule();

const calcHref = computed(() => {
  return props.disabled ? undefined : props.href;
});

const calcClass = computed(() => {
  return [
    className['z-link'],
    className[`z-link--${props.type}`],
    props.disabled ? className[`z-link--${props.type}--disabled`] : '',
    props.disabled ? className['z-link--disabled'] : '',
  ];
});
const onMouseover = () => {};
const underline: any = computed(() => (props.underline == true ? 'underline' : 'none'));
</script>

<style module lang="postcss">
.z-link-context {
  @apply align-text-top;
  .z-link-inner {
    @apply inline-flex items-center;
  }
  > .z-link {
    @apply inline-flex align-middle outline-none  items-center p-1 no-underline;
    &:hover {
      text-decoration-line: v-bind(underline);
    }
  }
  > .z-link--disabled {
    @apply no-underline;
    &:hover {
      @apply cursor-not-allowed no-underline;
    }
  }

  > .z-link--default {
    @apply text-color_regular;
    /* &:hover {
      @apply underline decoration-solid decoration-color_regular;
    } */
  }
  > .z-link--default--disabled {
    @apply text-color_secondary;
    &:hover {
      @apply no-underline;
    }
  }

  > .z-link--primary {
    @apply text-primary;
    /* &:hover {
      @apply underline decoration-solid decoration-primary_light_3;
    } */
  }
  > .z-link--primary--disabled {
    @apply text-primary_light_5;
    &:hover {
      @apply no-underline;
    }
  }
  > .z-link--success {
    @apply text-success;
    /* &:hover {
      @apply underline decoration-solid decoration-success_light_3;
    } */
  }
  > .z-link--success--disabled {
    @apply text-success_light_5;
    &:hover {
      @apply no-underline;
    }
  }
  > .z-link--warning {
    @apply text-wraning;
    /* &:hover {
      @apply underline decoration-solid decoration-wraning_light_3;
    } */
  }
  > .z-link--warning--disabled {
    @apply text-wraning_light_5;
    &:hover {
      @apply no-underline;
    }
  }

  > .z-link--danger {
    @apply text-danger;
    /* &:hover {
      @apply underline decoration-solid decoration-danger_light_3;
    } */
  }
  > .z-link--danger--disabled {
    @apply text-danger_light_5;
    &:hover {
      @apply no-underline;
    }
  }
  > .z-link--info {
    @apply text-info;
    /* &:hover {
      @apply underline decoration-solid decoration-info_light_3;
    } */
  }
  > .z-link--info--disabled {
    @apply text-info_light_5;
    &:hover {
      @apply no-underline;
    }
  }
  > .z-link-icon {
    @apply w-6;
  }
}
</style>
