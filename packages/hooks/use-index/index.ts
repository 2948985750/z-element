import { computed, inject, ref, unref } from 'vue';
import { isNumber } from 'lodash';

import type { InjectionKey, Ref } from 'vue';
const zIndex = ref(0);
export const defaultZIndex = 2000;
export const zIndexContextKey: InjectionKey<Ref<number | undefined>> = Symbol('zIndexContextKey');

export const useZindex = (zIndexValue?: Ref<number>) => {
  const zIndexInjection = zIndexValue || inject(zIndexContextKey);

  const initialZIndex = computed(() => {
    const zIndexFromInjection = unref(zIndexInjection);
    return isNumber(zIndexFromInjection) ? zIndexFromInjection : defaultZIndex;
  });

  const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    zIndex.value++;
    return currentZIndex.value;
  };

  return {
    initialZIndex,
    currentZIndex,
    nextZIndex,
  };
};
export type UseZIndexReturn = ReturnType<typeof useZindex>;
