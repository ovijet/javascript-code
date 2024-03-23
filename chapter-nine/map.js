let arr = [1, 2, 3, 4];

// let sqrArr = arr.map(function (value) {
//   //   return Math.random() * 100

//   return value * value;
// });

// console.log(arr);
// console.log(sqrArr);

function myMap(arr) {
    let newArr=[]
  for (let i = 0; i < arr.length; i++) {
    let temp= arr[i] * arr[i]
    newArr.push(temp)
  }

  return newArr
}

console.log(myMap(arr));
