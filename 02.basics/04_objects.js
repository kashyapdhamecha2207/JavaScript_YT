// const tinderUser = new Object();
const tinderUser = {}     // Both will give same answer

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kashyap",
            lastname: "Dhamecha"
        }
    }
}

// console.log(regularuser.fullname.userfullname);
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2 }    // Best Syntax
// console.log(obj3);

const users = [
    {
        id: 1,
        email : "k@gmail.com"
    },
    {
        id: 1,
        email : "k@gmail.com"
    },
    {
        id: 1,
        email : "k@gmail.com"
    },
    {
        id: 1,
        email : "k@gmail.com"
    }
]

users[1].email
console.log(tinderUser);
// console.log(Object.keys(tinderUser));    // It will give the keys of the object([ 'id', 'name', 'isLoggedIn' ])
// console.log(Object.values(tinderUser));  // It will give the values of the object([ '123abc', 'sammy', false ])
// console.log(Object.entries(tinderUser)); // It will make Everything String

console.log(tinderUser.hasOwnProperty("isLoggedIn"));   // true
console.log(tinderUser.hasOwnProperty("isLogged"));   // false