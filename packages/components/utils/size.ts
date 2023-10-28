import { Ref, computed, toRef } from 'vue';
import type { Unit } from '../../components/utils/basicDeclarations';
export type ComponentSize = 'default' | 'small' | 'large';

export const componentSizeMap = {
  large: 40,
  default: 32,
  small: 24,
};

export const useSize = (size: Ref<number | string>, unit: Unit, ratio?: number) => {
  return computed(() => {
    return ratio && typeof size.value !== 'string' ? size.value / ratio + unit : size.value + unit;
  });
};
