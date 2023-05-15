import { PropType } from 'vue';

type PropsObject<T> = {
  [K in keyof T]: {
    type: PropType<T[K]>;
    default?: T[K];
    required?: boolean;
  };
};

export type asd<T> = number;
type a = 'asd';

export function createProps<T extends Record<string, unknown>>(props: T): PropsObject<T> {
  const propsObject: PropsObject<T> = {} as PropsObject<T>;

  for (const key in props) {
    Object.assign(propsObject[key], {
      type: props[key],
    });
  }

  return propsObject;
}

const a = createProps({});
