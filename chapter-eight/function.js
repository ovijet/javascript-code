// function arr(a, b) {
//   console.log(a * b);
// }
// arr(4, 5);

// for (let i = 1; i <= 10; i++) {
//   if (i%2===0) {
//     console.log(i);
//   }
// }

function nam(a, b) {
  console.log(a - b);
}

nam(4, 5);
nam(5, 5);
nam(10, 5);

let arr1 = [1, 2, 3];
let arr2 = [20, 6, 9];
let arr3 = [10, 20, 30];

// let sum = 0;
// for (let i = 0; i < arr1.length; i++) {
//   sum += arr1[i];
// }
// console.log(sum);


function array(arr) {
  let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
}

array(arr1)
array(arr2)
array(arr3)