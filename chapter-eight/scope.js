let a = "abc";

// if (true) {
//     if (true) {
//         let b ='i am ovi'
//     }
// }

// console.log(b);

function x() {
  let a= 30
  function y() {
    let a = 30;
    console.log(a);
  }
  y();
}
x();


function test(n){
  function a(){
    return n%3===0
  }
  function b(){
    return n %5===0
  }

  if (a() && b()) {
    console.log(n + ' is a divisible by both 3 and 5');
  }else{
    console.log('not a valid numbar');
  }
}

test(15)