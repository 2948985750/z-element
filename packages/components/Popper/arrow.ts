import type { ExtractPropTypes } from "vue";
import type Arrow from './arrow.vue'

export const ArrowProps = {
  arrowOffset: {
    type: Number,
    default: 5
  }
}

export type PopperArrowInstance = InstanceType<typeof Arrow>
