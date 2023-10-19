import { Arrayable } from 'vitest';

export const getComputedSty = (el: Element): string => {
  return getComputedStyle(el).getPropertyValue('height');
};

export const extractNumber = (str: string): number => {
  return Number.parseFloat(str.match(/\d+/)?.[0] as string);
};

export function isArray(arr: any[]) {
  return Array.isArray(arr);
}

export function ensureArray<T>(arr: Arrayable<T>) {
  if (!arr && (arr as any) !== 0) return [];
  return Array.isArray(arr) ? arr : [arr];
}

export function isString(val: any): val is String {
  return typeof val === 'string';
}
