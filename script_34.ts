let ConstructorFunctionClass = (function () {
  function ConstructorFunctionClass(message: string) {
    this.greetings = message;
  }

  ConstructorFunctionClass.prototype.greet = function () {
    return "Hello, " + this.greetings;
  };

  return ConstructorFunctionClass;
})();

let constructorFunctionClass = new ConstructorFunctionClass("Message");
console.log(constructorFunctionClass.greet());
