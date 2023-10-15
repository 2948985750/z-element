export interface DataSource {
  key: string;
}

export interface List<T> {
  dataSource: T[];
  infiniteScrolling?: boolean;
  pagination?:
    | {
        position: 'bottom' | 'top';
        align: 'left' | 'center' | 'right';
      }
    | boolean;
  containerHeight?: string;
  itemHeight?: string;
  border?: boolean;
  continueLoad?: boolean;
  nextDataHandle?: (...args: any[]) => void;
  locale?: string;
  split?: boolean;
  loadCount?: number;
}

export type ListEmits<T> = {
  onItemClick: [val: T];
};
