// let sum = 0;
// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function (value, index, array) {
//   // console.log(value, index, array);
//   sum += index;
// });

// console.log(sum);

// let arr = [1, 2, 3, 4, 5];
//let  str = arr.map(function (value) {
//   // return Math.floor(Math.random() * 100);
//   return value * value * value;
// });

// console.log(arr);
// console.log(str);

// arr.forEach(function (value, index, array) {
//   console.log(value, index, array);
// });
let arr = [1, 2, 3, 4, 5];

// function map(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let temp = arr[i] * arr[i];
//     newArr.push(temp);
//   }
//   return newArr;
// }

// console.log(map(arr));

function map(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = cb(arr[i]);
    newArr.push(temp);
  }
  return newArr;
}

let ddd = map(arr, function (value) {
  return value * value * value;
});

let t10 = map(arr, function (value) {
  return value * 100;
});

console.log(arr);
console.log(ddd);
console.log(t10);
