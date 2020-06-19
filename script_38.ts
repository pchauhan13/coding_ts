function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let maps: { a: number, b: number, c: number, d: number } = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

console.log(getProperty(maps, "a"));