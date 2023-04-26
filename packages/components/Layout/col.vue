<template>
  <div :class="[$style['z-col']]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { reactive, inject, computed, onBeforeMount } from 'vue';
import { ColProps, type MediaArg } from './col';
import { layoutInjectKey } from './row';
import { isNil, debounce, isFunction, isUndefined, isObject } from 'lodash';

const props = defineProps(ColProps);
const ctx = inject(layoutInjectKey);

const fn = (propsObj: ColProps, arg: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => {
  console.log(propsObj[arg]);
  if (isObject(propsObj[arg])) {
    return { ...(propsObj[arg] as MediaArg) };
  } else {
    return {
      offset: propsObj.offset,
      push: propsObj.push,
      pull: propsObj.pull,
      span: propsObj[arg] ?? propsObj.span,
    };
  }
};

const mediaArg = reactive({
  xs: fn(props, 'xs'),
  sm: fn(props, 'sm'),
  md: fn(props, 'md'),
  lg: fn(props, 'lg'),
  xl: fn(props, 'xl'),
});
// const map = {
//     '(max-width:767px)': 'xs',
//     '(min-width:768px)': 'sm',
//     '(min-width:992px)': 'md',
//     '(min-width:1200px)': 'lg',
//     '(min-width:1920px)': 'xl'
// }

const space = computed(() => {
  const matchStr = ctx?.space.match(/^([\d.]+)(\D+)$/);
  if (isNil(matchStr)) {
    return '0';
  }
  const number = <string>matchStr?.[1];
  return Number.parseFloat(number) / 2 + <string>matchStr?.[2];
});
</script>

<style module lang="postcss">
.z-col {
  --percentage: calc(100% / 24);
  @apply flex-grow flex-shrink block;
  max-width: calc(var(--percentage) * v-bind('props.span'));
  padding-left: calc(v-bind('space') / 2);
  padding-right: calc(v-bind('space') / 2);
  margin-left: calc(var(--percentage) * v-bind('props.offset'));
  flex-basis: calc(var(--percentage) * v-bind('props.span'));
}

.z-col--push {
  position: relative;
  left: calc(var(--percentage) * v-bind('push'));
}

.z-col--pull {
  position: relative;
  right: calc(var(--percentage) * v-bind('pull'));
}

@media (max-width: 767px) {
  .z-col {
    max-width: calc(var(--percentage) * v-bind('mediaArg.xs.span'));
    margin-left: calc(var(--percentage) * v-bind('mediaArg.xs.offset'));
  }
  .z-col--pull {
    right: calc(var(--percentage) * v-bind('mediaArg.xs.pull'));
  }
  .z-col--push {
    left: calc(var(--percentage) * v-bind('mediaArg.xs.push'));
  }
}

@media (min-width: 768px) {
  .z-col {
    max-width: calc(var(--percentage) * v-bind('mediaArg.sm.span'));
    margin-left: calc(var(--percentage) * v-bind('mediaArg.sm.offset'));
  }
  .z-col--pull {
    right: calc(var(--percentage) * v-bind('mediaArg.sm.pull'));
  }
  .z-col--push {
    left: calc(var(--percentage) * v-bind('mediaArg.sm.push'));
  }
}

@media (min-width: 992px) {
  .z-col {
    max-width: calc(var(--percentage) * v-bind('mediaArg.md.span'));
    margin-left: calc(var(--percentage) * v-bind('mediaArg.md.offset'));
  }
  .z-col--pull {
    right: calc(var(--percentage) * v-bind('mediaArg.md.pull'));
  }
  .z-col--push {
    left: calc(var(--percentage) * v-bind('mediaArg.md.push'));
  }
}
@media (min-width: 1200px) {
  .z-col {
    max-width: calc(var(--percentage) * v-bind('mediaArg.lg.span'));
    margin-left: calc(var(--percentage) * v-bind('mediaArg.lg.offset'));
  }
  .z-col--pull {
    right: calc(var(--percentage) * v-bind('mediaArg.lg.pull'));
  }
  .z-col--push {
    left: calc(var(--percentage) * v-bind('mediaArg.lg.push'));
  }
}
@media (min-width: 1920px) {
  .z-col {
    max-width: calc(var(--percentage) * v-bind('mediaArg.xl.span'));
    margin-left: calc(var(--percentage) * v-bind('mediaArg.lg.offset'));
  }
  .z-col--pull {
    right: calc(var(--percentage) * v-bind('mediaArg.xl.pull'));
  }
  .z-col--push {
    left: calc(var(--percentage) * v-bind('mediaArg.xl.push'));
  }
}
</style>
