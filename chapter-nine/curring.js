function add(a, b, c) {
  return a + b + c;
}
// console.log(add(4, 5, 6));

function curring(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

let result = curring(20)(30)(40);
console.log(result);
