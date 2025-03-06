// Primitive

// Total - 7 Types  :  String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);  => False bcz we difined it symbol

const bigNumber = 34568597139436n


// Reference  (Non-Primitive)

// Array , Objects , Functions 

const heros = ["shaktiman", "naagraj" , "doga"]
let myObj = {
    name: "kashyap",
    age : 18,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);  // bigint
console.log(typeof myObj);  // object
console.log(typeof myFunction);  // function
console.log(typeof heros);  // object
console.log(typeof anotherId);  // symbol



// Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Reference (Non primitive)

// Array, Objects, Functions


let myYoutubename = "kashyap.dhamecha"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);    // hitesh@google.com
console.log(anothername);      // hitesh@google.com   bcz it goes into heap not stack(stack provides copy of object heap giver same reference to object)

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);      // hitesh@google.com
console.log(userTwo.email);      // hitesh@google.com   bcz it goes into heap not stack(stack provides copy of object heap giver same reference to object)

