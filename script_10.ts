let input = [1, 2];
let [first, second] = input;
console.log(first, second);
console.log("after swapping...");
[second, first] = [first, second];
console.log(first, second);


function f([first, second]: [number, number])
{
  console.log(first);
  console.log(second);
}

f([first, second]);

let [yep, ...rest] = [1, 2, 3, 4];

[yep] = [1, 2, 3, 4];
console.log(yep);