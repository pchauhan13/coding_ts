function identity<T>(arg: T): T {
  return arg;
}

let func: <T>(arg: T) => T = identity;