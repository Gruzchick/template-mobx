export type BuiltIn =
  // eslint-disable-next-line @typescript-eslint/ban-types
  Function | Error | Date | { readonly [Symbol.toStringTag]: string } | RegExp | Generator;

export type DeepAny<T> = T extends object
  ? T extends BuiltIn
    ? any
    : T extends ReadonlyArray<any>
    ? any[]
    : {
        [Key in keyof T]: DeepAny<T[Key]>;
      }
  : any;

export type DeepPartial<T> = T extends object
  ? {
      [Key in keyof T]?: T[Key] extends BuiltIn | ReadonlyArray<any> ? T[Key] : DeepPartial<T[Key]>;
    }
  : T;
