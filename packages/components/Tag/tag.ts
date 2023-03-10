import { PropType } from "vue";

interface TagProp {
  type?: 'default' | 'warning' | "error" | "processing" | "success",
  size?: "small" | "medium" | "large",
  round?: Boolean,
  closable?: Boolean,
  styleType?: 'button' | 'link',
  // color?: String,
  // border?: String,
  // bg?: String,
  disabled?: Boolean,
  slot?: Element
}

export const TagProps = {
  type: { type: String as PropType<TagProp['type']>, default: 'default'},
  size: { type: String as PropType<TagProp['size']>, default: 'small'},
  round: { type: Boolean, default: false},
  closable: { type: Boolean, default: false},
  styleType: { type: String as PropType<TagProp['styleType']>, default: 'button'},
  disabled: { type: Boolean, default: false},
  slot: { type: Element as PropType<TagProp['slot']>, default: void 0}
}