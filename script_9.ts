var a = 10;

function f1(): string
{
  var message = "Hello, World";
  return message;
}

function f2(): Function
{
  var a = 10;
  return function g() {
    var b = a + 1;
    return b;
  }
}

var g2 = f2();
g2();