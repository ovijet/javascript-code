//Insert and Rmove Element

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// Insert 9 to index 3

// arr[3]=9
// arr.push(9)
// arr.unshift(9)
// arr.splice(3,0,10)

// arr[3]=undefined
// arr.pop()
// arr.shift()
// arr.splice(4,0,20)

// arr.push(10)
// arr.pop()
// arr.unshift()
// arr.shift()
// arr.splice(3,1)
// arr.filter()

// arr.splice(3,0,10)
// console.log(arr);

console.log(arr);

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum +=arr[i]
}
console.log(sum);


// arrayr even numbar
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2==0) {
        console.log(arr[i]);
    }
    
}


// arrayr odd numbar

for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2==1) {
        console.log(arr[i]);
    }
    
}