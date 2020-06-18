class Animal2 {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }

  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}`);
  }
}

class Snake extends Animal2 {
  constructor(name: string) {
    super(name);
  }

  move(distanceInMeters: number = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal2 {
  constructor(name: string) {
    super(name);
  }

  move(distanceInMeters: number = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy The Python");
let tom: Animal2 = new Horse("Tommy The Horse");

sam.move();
tom.move(543);