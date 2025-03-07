// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman" , "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]); 

// Array Methods

// myArr.push(6)
// console.log(myArr);  // [0, 1, 2, 3, 4, 5, 6]

// myArr.pop()
// console.log(myArr);  // [ 0, 1, 2, 3, 4, 5 ]

// myArr.unshift(3)
// console.log(myArr);     // [3, 0, 1, 2, 3, 4, 5 ]

// myArr.shift()
// console.log(myArr);      // [ 1, 2, 3, 4, 5 ]

// console.log(myArr.includes(3)); // true (answer in boolean)

// console.log(myArr.indexOf(9));   // -1

// const newArr = myArr.join()    // converts array to string 

// console.log(newArr);  
// console.log(typeof newArr);  

// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1 ,3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1 ,3)
console.log("C ", myArr);
console.log(myn2);