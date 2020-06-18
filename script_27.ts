class PrivateAnimal {
  #name: string;
  constructor(theName: string) {
    this.#name = theName;
  }
}

let test = new PrivateAnimal("tommy");
test.#name;