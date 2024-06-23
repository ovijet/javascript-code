function sayhi(n) {
  if (n === 0) {
    return;
  }
  console.log("hi,");
  sayhi(n - 1);
}
sayhi(10);

function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}
console.log(sum(5));
