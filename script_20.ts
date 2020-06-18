interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = {} as Square;
square.color = "Blue";
square.sideLength = 3;
console.log(square);
