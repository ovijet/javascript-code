//traverse an array
let arr = [4, 5, 1, 3, 7, 2, 40];

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

for (let  i = 0; i < arr.length; i++) {
    if(arr[i]%2===0){
        console.log(arr[i]);
    }
}
