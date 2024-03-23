// let a='4'
// let b=4
// if (a==!b) {
//     console.log(true);
// }else{
//     console.log(false);
// }

// for(let i=0;i<=100;i++){
//     if (i%2===1) {
//         console.log(i);
//     }
// }

// let arr = [4, 6, 8, 1, 20, 85];

// for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// arr[i]+=2
// console.log(arr[i]);
// }

// sum

// let sum = 0;

//  for(let i =0;i<arr.length;i++){
//      sum+=arr[i]
//  }
//  console.log(sum);

let arr = [1, 2, 3, 4, 5];


// let sum =0
arr.forEach(function(value,index,arr){
    // console.log(value,index,arr);

  arr[index]=value+5
})

console.log(arr);
