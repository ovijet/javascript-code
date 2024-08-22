// // Inheritance

// function person(name) {
//   this.name = name;
// }
// let p1 = new person("ovijet halder");

// console.log(p1);

let person = {
  name: "ovijet halder",
};

// let desk = Object.getOwnPropertyDescriptor(person, "name");

// console.log(desk);

let past = Object.getPrototypeOf(person);
console.log(past);
let desk = Object.getOwnPropertyDescriptor(person, toString);
console.log(desk);




