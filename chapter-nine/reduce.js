let arr =[1,2,3,4,5]

let sum =arr.reduce(function(prev,curr){
    return prev + curr
},100)

console.log(sum);