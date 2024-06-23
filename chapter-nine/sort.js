let person=[
  {
    name:'ovi',
    age:21
  } ,
 {
    name:"shuvo",
    age:14
  } , {
  name:'antora',
  age:25
} ,{
  name:'bindu',
  age:40
}
]


let arr=[2,3,4,2,4,6,9,32,-66]

// arr.sort()
// // person.sort()
// console.log(arr);
// console.log(person);

arr.sort(function(a,b){
  if(a>b){
    return 1
  }else if(a<b){
    return-1
  }else{
    return 0
  }
})
console.log(arr);