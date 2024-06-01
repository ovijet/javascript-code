let arr = [1, 2, 3, 4, 5, 6];

// let filterArr = arr.filter(function (value) {
//   // return value % 2 === 0;
//   // return value % 2 === 1;
//   return value < 4;
// });
// console.log(filterArr);

// function myFilter(arr) {
//   let newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(myFilter(arr));

function myFilter(arr, cb) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let oddd = myFilter(arr, function (value) {
  return value % 2 === 0;
});

let even = myFilter(arr, function (value) {
  return value % 2 === 1;
});
let lesthen = myFilter(arr, function (value) {
  return value < 4;
});

console.log(oddd);
console.log(even);
console.log(lesthen);
