interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = {} as Square;
square.color = "Blue";
square.sideLength = 3;
square.penWidth = 4.0;
console.log(square);
