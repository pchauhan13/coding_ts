enum ShapeKind {
  Square,
  Circle
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let cr: Circle = {
  kind: ShapeKind.Square,
  radius: 100
}