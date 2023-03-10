import { PropType } from 'vue';
interface HeaderProp {
  height?: string;
  flex?: boolean;
}

export const HeaderProps = {
  height: {
    type: String as PropType<HeaderProp['height']>,
    default: '56px',
  },
  flex: {
    type: Boolean as PropType<HeaderProp['flex']>,
    default: false,
  },
};
