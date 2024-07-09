function rgbColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  return `(${red},${green},${blue})`;
}

let result = rgbColor();

console.log(result);
