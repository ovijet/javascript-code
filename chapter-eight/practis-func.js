// function sum(a, b) {
//   console.log(a + b);
// }

// sum(3, 4);

// function add() {
//   console.log("my function");
// }

// for (let i = 0; i < 10; i++) {
//   add();
// }

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
sumOfArray(arr1);
sumOfArray(arr2);
sumOfArray(arr3);

// function ovi(a, b) {
//   console.log(arguments);
// }
// ovi(10, 20);

function func(x, y, z) {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
// let result =
func(10, 20, 30);

// console.log(result);

function addAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

addAll(1, 2, 3);
addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function hey(great, name) {
  function same() {
    console.log(great, name);
  }
  same();
}
let pp = hey("good arternoon", "ovi");

console.log(pp);
