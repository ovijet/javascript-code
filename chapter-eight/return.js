// function fName(a,b){
//     return a+b
// }
// console.log(fName(20,30));

// function add(a, b, c) {
//   for (let i = 0; i < arguments.length; i++) {
//     return arguments[i];
//   }
// }
// let result = add(10);

// console.log(result);

function person(name, email) {
  return {
    name,
    email,
  };
}
let pl = person("ovi halder", "ovi@gmail.com");

console.log(pl);

function fun(a, b, c) {
  return a * b * c;
}

let same = fun(4, 5, 6);

console.log(same);
