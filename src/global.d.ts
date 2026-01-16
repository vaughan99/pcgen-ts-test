// src/global.d.ts
declare global {
  //   type MyGlobalType = {
  //     id: number;
  //     name: string;
  //   };

  // You can also declare global variables (less common in modern TS)
  // var MY_GLOBAL_VARIABLE: string;
  var NL_PATH: string | undefined;
}

// Ensures the file is treated as a module, which doesn't affect the declare global block
export {};
