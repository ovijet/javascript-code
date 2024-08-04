// let renge = {
//   width: 200,
//   height: 100,

//   draw: function () {
//     console.log("i am a rectangle");
//     console.log("my height is " + this.height);
//   },
// };

// renge.draw();

// renge.height = 300;
// renge.draw();

let creatrect = function (width, height) {
  return {
    Width: width,
    Height: height,
    draw: function () {
      console.log("i am arectangle");
      this.printProparty();
      console.log(this);
    },

    printProparty: function () {
      console.log("the width is " + this.Width);
      console.log("the height is " + this.Height);
    },
  };
};

let rect1 = creatrect(20, 30);
rect1.draw();

let rect2 = creatrect(40, 60);
rect2.draw();
