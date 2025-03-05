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