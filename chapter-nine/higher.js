// function add(a, b) {
//   return a + b;
// }

// function manipualte(a, b, fun) {
//   let c = a + b;
//   let d = a - b;

//   function mal() {
//     let m = fun(a, b);

//     return c * d * m;
//   }

//   return mal;
// }
// let mal = manipualte(3, 4, add);

// console.log(mal());



let arr =[1,2,3,4]

function cbf (a){
  console.log(a);
}

arr.forEach(cbf)