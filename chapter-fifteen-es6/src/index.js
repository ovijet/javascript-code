// import  express  from "express";

// const app = express();
// const post = 3000;
// app.get("/", (req, res) => res.sendStatus('hello-ovi'))
// app.listen(post,() => console.log(`app listing on post ${post}`))

let naame = "ovi";
let age = 23;

let s = `i am ${naame} and age ${age} and i am ${age < 20 ? "not" : ""} adult`;

console.log(s);

// arrow function

let add = (a, b) => a + b;

console.log(add(20, 30));

let x = (d) => d;
console.log(x(30));

let obj = {
  namee: "ovi",
  print: function () {
    setTimeout(function () {
      alert(`hello ${namee}`);
    }, 1000);
  },
};
obj.print();

let namme = "ovijet";
let agee = 23;

function addd(name, agee) {
  console.log(`i am ${namme} and ${age} years old`);
}

addd();
