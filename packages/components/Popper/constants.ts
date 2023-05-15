import type { CSSProperties, ComputedRef, InjectionKey, Ref } from 'vue'
import type { Instance } from '@popperjs/core'

export type Measurable = {
  getBoundingClientRect: () => DOMRect
}

export type PopperInjectionContext = {
  triggerRef: Ref<Measurable | undefined>
  contentRef: Ref<HTMLElement | undefined>
  popperInstanceRef: Ref<Instance | undefined>
  referenceRef: Ref<Measurable | undefined>
  role: ComputedRef<string>
}

export type PopperContentInjectionContext = {
  arrowRef: Ref<HTMLElement | undefined>
  arrowOffset: Ref<number | undefined>
  arrowStyle: ComputedRef<CSSProperties>
}

export const POPPER_INJECTION_KEY: InjectionKey<PopperInjectionContext> =
  Symbol('popper')

export const POPPER_CONTENT_INJECTION_KEY: InjectionKey<PopperContentInjectionContext> =
  Symbol('popperContent')
