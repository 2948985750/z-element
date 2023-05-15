import type { Placement, Strategy, offset, shift, flip, arrow, autoPlacement, hide, inline } from '@floating-ui/vue'
import type { ExtractPropTypes, PropType, StyleValue } from 'vue'

import type { Measurable } from './constants'
import type Content from './content.vue'

type MiddleWare = {
  offset?: typeof offset | number;
  shift?: typeof shift | number;
  flip?: typeof flip | number;
  arrow?: typeof arrow | number;
  autoPlacement?: typeof autoPlacement | number;
  hide?: typeof hide | number;
  inline?: typeof inline | number;
};

export interface CreatePopperInstanceParams {
  referenceEl: Measurable
  popperContentEl: HTMLElement
  arrowEl: HTMLElement | undefined
}

export interface PopperContentProps {
  placement: Placement;
  strategy: Strategy;
  middleware: MiddleWare
}


export interface PopperContentEmits { }
