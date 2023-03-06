export interface bemCtx {
  block: {
    element(str: string, ...modifier: string[]): string;
    modifier(...args: string[]): string;
  };
}
