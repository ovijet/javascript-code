// alert("i am a oob");

// let rect = {
//   Width: 100,
//   Height: 50,
//   draw: function () {
//     console.log("i am arectangle");
//     this.printProparty();
//   },

//   printProparty: function () {
//     console.log("the width is " + this.Width);
//     console.log("the height is " + this.Height);
//   },
// };

// rect.draw();

// rect.Height = 200;

// rect.draw();

// // this-proparty//
// function add() {
//   console.log(this);
// }
//  add();

// let len = {
//   Width: 20,
//   Height: 40,
//   print: rect.printProparty,
// };
// len.print();

// factory-patten in js--------------------------------//

// let creatrect = function (width, height) {
//   return {
//     Width: width,
//     Height: height,
//     draw: function () {
//       console.log("i am arectangle");
//       this.printProparty();
//       console.log(this);
//     },

//     printProparty: function () {
//       console.log("the width is " + this.Width);
//       console.log("the height is " + this.Height);
//     },
//   };
// };

// let rect1 = creatrect(20, 30);
// rect1.draw();

// let rect2 = creatrect(40, 60);
// rect2.draw();

// constractor pattan ---------------------//

// let rectangle = function (width, height) {
//   this.Width = width;
//   this.Height = height;
//   this.draw = function () {
//     console.log("i am arectangle");
//     this.printProparty();
//     console.log(this);
//   };

//   this.printProparty = function () {
//     console.log("the width is " + this.Width);
//     console.log("the height is " + this.Height);
//   };
// };

// let rect3 = new rectangle(2,3);

// rect3.draw();

function myFun(c, d) {
  console.log(this);
  console.log(this.a + this.b + c + d);
}

myFun.call({ a: 30, b: 40 });
myFun.apply({ a: 30, b: 40 }, [10, 20]);

let bindd = myFun.bind({ a: 7, b: 3 });

bindd(5,5)
