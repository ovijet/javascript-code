//traverse an array
let arr = [4, 5, 1, 3, 7, 2, 6, 40];

//arr [0]
//arr [1]
//arr [2]
//arr [3]
//arr [arr.length-1]

// for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // arr[i]+=2 eita holo ager value thake 2 kore + korci
// arr[i]+=2
// }
// console.log(arr);
// let sum=0
// for(let i =0;i<arr.length;i++){
//     sum+=arr[i]
// }
// console.log(sum);

// for(var i=0;i<arr.length;i++){
//     if (arr[i]%2===1) {
//         console.log(arr[i]);
//     }
// }

for (var i = 0; i < arr.length; i++) {
  // console.log(arr[i]);

  arr[i] = arr[i] + 2;
}
console.log(arr);

let sum=0
for (var i = 0; i < arr.length; i++) {
    sum =sum+arr[i]
}
console.log(sum);

let sub=0
for(let j=0;j<=arr.length;j++){
    if (arr[j]%2===0) {
        // console.log(arr[j]);
        sub+=arr[j]
    }
    console.log(sub);
}
