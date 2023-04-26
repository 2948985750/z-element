type stringArr = string[];

// 拼接字符串
function join(strs: stringArr) {
  return strs.map((modifier: string) => '--' + modifier).join('');
}

// css类名命名空间
function nameSpace() {
  return {
    // 前缀elementName 拼接 多个参数数组（modifiers）join()后的后缀
    element(elementName: string, ...modifiers: stringArr) {
      const prefix = elementName;
      const prevfix = join(modifiers);
      return prefix + prevfix;
    },
    // 多个参数数组（modifiers）join()拼接
    modifier(...modifierName: stringArr) {
      const prevfix = join(modifierName);
      return prevfix;
    },
    // 返回 state 参数数组全为 true 后的 elementName 字符串， 不都为 true 时返回 空字符串
    is(elementName: string, ...state: boolean[]) {
      let state_ = state.every((state) => state === true);
      if (state.length === 0) state_ = false;
      return elementName && state_ ? elementName : '';
    },
  };
}

/**
 * 多类名整合成类名数组
 * @param definePrev 自定义前缀
 * @param classes 类名数组
 * @returns 自定义类名数组（和每个单独组件契合）
 */
const contactClass = (definePrev: string, ...classes: stringArr) => {
  const block =  nameSpace()
  return classes.map((Class:string) => block.element(definePrev, Class))
}

export { nameSpace, contactClass };
