import { Plugin } from 'vue';

type SFCWithInstall<T> = T & Plugin;
export const withInstall = <T, E extends Record<string, any>>(com: T, ext?: E) => {
  console.log(com);
  (com as SFCWithInstall<T>).install = function (app) {
    alert();
    console.log(com);
    // app.use(com.name);
  };
  return com;
};
