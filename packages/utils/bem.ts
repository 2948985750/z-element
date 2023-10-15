/**
 * 多类名整合成类名数组
 * @param definePrev 自定义前缀
 * @param classes 类名数组
 * @returns 自定义类名数组（和每个单独组件契合）
 */

function is(elementName: string, ...state: boolean[]) {
  let state_ = state.every((state) => state === true);
  if (state.length === 0) state_ = false;
  return elementName && state_ ? elementName : '';
}

export { is };
