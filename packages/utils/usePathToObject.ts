import { Arrayable } from 'vitest';
import { get, set } from 'lodash';

export function usePathToObject<T extends object, K extends Arrayable<string>>(obj: T, path: K, defaultValue = null) {
  return {
    get val() {
      return get(obj, path, defaultValue);
    },
    set val(value) {
      set(obj, path, value);
    },
  };
}
