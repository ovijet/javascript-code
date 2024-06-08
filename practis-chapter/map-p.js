// let arr = [10, 12, 43, 84, 93, 30, 54];

// // let srtArr = arr.map(function (value) {
// //   return value * value;
// // });

// // console.log(srtArr);

// function max(arr, cb) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let temp = cb(arr[i]);
//     newArr.push(temp);
//   }
//   return newArr;
// }

// let plass = max(arr, function (value) {
//   return value * value * value;
// });

// console.log(plass);

let arr = [10, 12, 43, 84, 93, 30, 54];

// let sum = arr.map(function (value) {
//   return value * value;
// });

// console.log(sum);

function str(arr) {
  let mtArr = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i] * arr[i];
    mtArr.push(temp);
  }
  return mtArr;
}

console.log(str(arr));
