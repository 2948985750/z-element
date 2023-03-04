type stringArr = string[];

function join(strs: stringArr) {
  return strs.map((modifier: string) => '--' + modifier).join('');
}

function bemBlock(blockName?: string) {
  return {
    element(elementName: string, ...modifiers: stringArr) {
      const prefix = blockName ? `${blockName}-${elementName}` : `${elementName}`;

      const prevfix = join(modifiers);
      return prefix + prevfix;
    },
    modifier(...modifierName: stringArr) {
      const prevfix = join(modifierName);
      return blockName + prevfix;
    },
  };
}

export { bemBlock };
