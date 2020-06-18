interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;

myArray = ["One", "Two"];

let myStr = myArray[1];
console.log(myStr);