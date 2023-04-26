export function getStyle(element: Element, prop: string) {
  return window.getComputedStyle(element).getPropertyValue(prop);
}
