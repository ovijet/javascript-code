let arr = [1, 2, 3, 4, 5, 9, 56, 32];

// let filterArr = arr.filter(function (value) {
//   return value % 2 === 0;
// });

// console.log(filterArr);

// function newArr(arr) {
//   let mtArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       mtArr.push(arr[i]);
//     }
//   }
//   return mtArr;
// }

// console.log(newArr(arr));

function newArr(arr, cb) {
  let mtArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      mtArr.push(arr[i]);
    }
  }
  return mtArr;
}

console.log(
  newArr(arr, function (value) {
    return value % 2 === 0;
  })
);

console.log(
  newArr(arr, function (value) {
    return value % 2 === 1;
  })
);
