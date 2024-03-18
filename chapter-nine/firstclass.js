//first class function
function add(a,b){
    return a + b
  }

//1. a function can be stored in a variable
let sum = add 

console.log(add(5,5));

//2. a function can be stored in an array
let arr =[]
arr.push(add)

console.log(add(5,6));

//3. a function can be stored in an object
//4. we can create function as need 

setTimeout(function (){
    console.log('i have a created');
},5000)
//5.

