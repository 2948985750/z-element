type qwe = { [key: string]: any };
type asd<T> = qwe & { [key in keyof T]?: T[key] };

export function withDefaultProps<T extends asd<T>>(props: T, inputVal: T): T {
  let count = 0;
  let result: qwe = {};
  let inputKeys = Object.keys(inputVal);
  inputKeys.forEach((key) => {
    if (typeof props[key] === 'undefined') {
      result[key] = inputVal[key];
      count++;
    }
  });

  return count !== 0 ? (result as T) : props;
}
