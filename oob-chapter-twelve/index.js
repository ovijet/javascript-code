// alert("i am a oob");

let rect = {
  Width: 100,
  Height: 50,
  draw: function () {
    console.log("i am arectangle");
    console.log("the width is " + this.Width);
    console.log("the height is " + this.Height);
  },
};

rect.draw();

rect.Height = 200;

rect.draw()
