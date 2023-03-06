import { PropType } from 'vue';

interface IconProp {
  size?: number | string;
  color?: string;
}

export const IconProps = {
  size: String as PropType<IconProp['size']>,
  color: String,
};
