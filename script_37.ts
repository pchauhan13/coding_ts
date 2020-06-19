interface LengthWise {
  length: number;
}

function loggingIdentity<T extends LengthWise>(arg: T) {
  console.log(arg.length);
}