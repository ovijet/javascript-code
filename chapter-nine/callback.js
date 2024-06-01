// function cb(a, b) {
//   let c = a + b;
//   let d = a - b;

//   let result = sum(c, d);

//   return result;
// }

// function sum(a, b) {
//   return a + b;
// }

// console.log(cb(5, 8));

// let result1 = sum(4, 8, function (c, d) {
//   return c - d;
// });

// console.log(result1);

function semple(a, b) {
  let c = a + b;
  let d = a - b;
  let result = sum(c, d);
  return result;
}

function sum(a, b) {
  return a + b;
}
console.log(semple(5, 8));
