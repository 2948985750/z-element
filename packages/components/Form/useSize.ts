import { computed } from 'vue';
import { componentSizeMap } from '../types-util/size';
import { useFormContext, useFormItemContext } from './useContext';

interface context {
  form: typeof useFormContext;
  formItem: typeof useFormItemContext;
  [k: string]: any;
}
export function useSize(name: string) {
  const map: context = {
    form: useFormContext,
    formItem: useFormItemContext,
  };
  const ctx = map[name]();
  return computed(() => {
    if (ctx?.size === 'default') {
      return componentSizeMap.default + 'px';
    } else if (ctx?.size === 'large') {
      return componentSizeMap.large + 'px';
    } else {
      return componentSizeMap.small + 'px';
    }
  });
}
