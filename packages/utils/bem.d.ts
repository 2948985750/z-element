type stringArr = string[];
declare function bemBlock(blockName?: string): {
    element(elementName: string, ...modifiers: stringArr): string;
    modifier(...modifierName: stringArr): string;
};
export { bemBlock };
