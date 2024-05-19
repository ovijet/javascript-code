// let arr = [1,2,3,4,5,6,7,8,9,10]
// //  console.log(arr);

// // let sum = 0
// //  for(let i=0;i<arr.length;i++){
// //   sum +=arr[i]
// //  }

// //  console.log(result = sum )

// for(let i=0;i<arr.length;i++){
//   if (arr[i]%2) {
//     console.log(arr[i]);
//   }

// }

let arr = [1, 2, 3, 4, 5];

// arr[10] = 20;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
//   }
// }

// arr.pop();
arr.splice(3, 0, 10);
console.log(arr);
