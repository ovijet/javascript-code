let arr = [1, 2, 3, 4, 5 ,55];
// console.log(arr);

for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
// console.log("result " + "= " + sum);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 1) {
    // console.log(arr[i]);
  }
}

//fine large numbar

let largeNumbar = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largeNumbar) {
        largeNumbar = arr[i]
    }
}
console.log(largeNumbar);


//fine small numbar


let smallNumbar = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallNumbar) {
        smallNumbar = arr[i]
    }
}
console.log(smallNumbar);