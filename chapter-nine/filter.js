let arr = [4, 6, 8, 9, 2, 1, 5, 4];

// let sqrArr = arr.filter(function (value) {
//   return value >= 9;
// });

// console.log(sqrArr);

// function myFilter(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(myFilter(arr));

function myFilter(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  myFilter(arr, function (value) {
    return value % 2 == 1;
  })
);

console.log(
  myFilter(arr, function (value) {
    return value > 1;
  })
);
