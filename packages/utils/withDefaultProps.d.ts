type qwe = {
    [key: string]: any;
};
type asd<T> = qwe & {
    [key in keyof T]?: T[key];
};
export declare function withDefaultProps<T extends asd<T>>(props: T, inputVal: T): T;
export {};
