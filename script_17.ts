interface SearchFunc {
  (source: string, substring: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, substring: string): boolean {
  let result = source.search(substring);
  return result > -1;
}