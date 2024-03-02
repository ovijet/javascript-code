function test(a, b, c, d) {
  console.log(arguments);
}
test(10, 20, 30, 60);

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

function name() {
  let a = 10;
  let b = 20;
  let result = a + b;
  console.log(result);
}

name()

function sum(a, b) {
  console.log(a + b);
}
sum(10, 10);
sum(40, 10);
sum(30, 10);
sum(20, 10);
