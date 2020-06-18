interface NumberDictionary {
  [index: string]: number;
  length: number;
  // name: string;
};

interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number;
  name: string;
};