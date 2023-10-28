import { Ref, computed, toRef } from 'vue';
import { componentSizeMap } from '../../components/utils/size';
import { ComponentSize } from '../../components/utils/size';

const useComponentSize = (reactivity: ComponentSize) => {
  const _size = toRef(reactivity);
  return computed(() => {
    return componentSizeMap[_size.value];
  });
};

export { useComponentSize };
