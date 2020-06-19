class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal4 {
  numLegs: number;
}

class Bee extends Animal4 {
  keeper: BeeKeeper;
}

class Lion extends Animal4 {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal4>(c: new () => A): A {
  return new c();
}

console.log(createInstance(Lion).keeper.nametag);
console.log(createInstance(Bee).keeper.hasMask);

