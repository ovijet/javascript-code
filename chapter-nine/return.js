function base(a) {
  function pawer(n) {
    let result = 1;
    for (let i = 0; i < a; i++) {
      result *= n;
    }
    return result;
  }
}
let base10 = base(10);

let a = 10;
console.log(base10);
