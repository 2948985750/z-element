type stringArr = string[];

function join(strs: stringArr) {
  return strs.map((modifier: string) => '--' + modifier).join('');
}

function nameSpace() {
  return {
    element(elementName: string, ...modifiers: stringArr) {
      const prefix = elementName;
      const prevfix = join(modifiers);
      return prefix + prevfix;
    },
    modifier(...modifierName: stringArr) {
      const prevfix = join(modifierName);
      return prevfix;
    },
    is(elementName: string, ...state: boolean[]) {
      let state_ = state.every((state) => state === true);
      if (state.length === 0) state_ = false;
      return elementName && state_ ? elementName : '';
    },
  };
}

export { nameSpace };
