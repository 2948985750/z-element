class ZuiError extends Error {
  constructor(m: string) {
    super(m);
    this.name = 'ElementPlusError';
  }
}

export function debugWarn(err: Error): void;
export function debugWarn(scope: string, message: string): void;
export function debugWarn(scope: string | Error, message?: string): void {
  if (process.env.NODE_ENV !== 'production') {
    const error: Error = typeof scope === 'string' ? new ZuiError(`[${scope}] ${message}`) : scope;
    // eslint-disable-next-line no-console
    console.warn(error);
  }
}
