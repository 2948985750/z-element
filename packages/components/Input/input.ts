import { PropType } from "vue";

// 正整数类型
type PositiveInteger = number & { __positiveInteger: never };
type Len = Number | Boolean | null

interface InputProp {
  type?: 'text' | 'textarea' | 'password' | 'number' | 'search',
  size?: 'mini' | 'small' | 'normal' | 'large',
  full?: Boolean,
  round?: Boolean,
  col?: Number,
  maxLen?: PositiveInteger | false | null,
  disabled: Boolean,
  clearIcon: Boolean
}

export const InputProps = {
  type: { type: String as PropType<InputProp['type']>, default: 'text'},
  size: { type: String as PropType<InputProp['size']>, default: 'small'},
  full: { type: Boolean, default: false},
  round: { type: Boolean, default: false},
  col: { type: Number, default: 1},
  maxLen: { type: Number, default: null},
  disabled: { type: Boolean, default: false},
  clearIcon: { type: Boolean, default: false}
}

