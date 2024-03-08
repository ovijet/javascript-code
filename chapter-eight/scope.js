let a = "abc";

// if (true) {
//     if (true) {
//         let b ='i am ovi'
//     }
// }

// console.log(b);

function x() {
  function y() {
    let a = 20;
    console.log(a);
  }
  y();
}
x();
