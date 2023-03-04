function join(strs) {
  return strs.map((modifier) => "--" + modifier).join("");
}

function bemBlock(blockName?: string) {
  return {
    element(elementName, ...modifiers) {
      const prefix = blockName
        ? `${blockName}-${elementName}`
        : `${elementName}`;

      const prevfix = join(modifiers);
      return prefix + prevfix;
    },
    modifier(...modifierName) {
      const prevfix = join(modifierName);
      return blockName + prevfix;
    },
  };
}

export { bemBlock };
