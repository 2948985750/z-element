export const getComputedSty = (el: Element): string => {
  return getComputedStyle(el).getPropertyValue('height');
};

export const extractNumber = (str: string): number => {
  return Number.parseFloat(str.match(/\d+/)?.[0] as string);
};

export function isArray(arr: any[]) {
  return Array.isArray(arr);
}
