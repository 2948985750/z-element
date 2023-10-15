import { PropType, Component, ExtractPropTypes } from 'vue';
type LinkType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default';

export const linkProps = {
  type: {
    type: String as PropType<LinkType>,
    default: 'default',
  },
  underline: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: Object as any,
  href: {
    type: String,
    default: '',
  },
};

// export type LinkProps = ExtractPropTypes<typeof linkProps>;

export interface LinkProps<T> {
  type: LinkType;
  underline: boolean;
  disabled: boolean;
  icon: T;
  href: string;
}
