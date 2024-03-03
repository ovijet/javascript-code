// function fName(a,b){
//     return a+b
// }
// console.log(fName(20,30));

function add(a, b, c) {
  for (let i = 0; i < arguments.length; i++) {
    return arguments[i]
  }
}
let result = add(10);

console.log(result);