type AnyObject = { [key: string]: any };

export function usePathToObject() {
  return {
    getValueByPath(object: any, path: string) {
      // debugger;
      if (!(object instanceof Object)) {
        return;
      }
      if (typeof path === 'undefined') {
        return object;
      }
      const pathArr = typeof path === 'string' ? path.split('.') : [path];
      let result = object;
      for (const prop of pathArr) {
        // debugger;
        result = result[prop];
      }
      return result;
    },
    setValueByPath(object: any, path: string, val: any): void {
      const pathArr = typeof path === 'string' ? path.split('.') : [path];
      const lastProp = <string>pathArr.pop();
      let nestedObj = object;
      for (let prop of path) {
        if (!(nestedObj[prop] instanceof Object)) {
          break;
        }
        nestedObj = nestedObj[prop];
      }
      nestedObj[lastProp] = val;
    },
  };
}
