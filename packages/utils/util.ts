export function sliceString(str: string) {
  const reg = /^([\d\.]*)(\w+)$/;
  const matchResult = str.match(reg);
  const num = matchResult![1];
  const unit = matchResult![2];
  return { num, unit };
}
