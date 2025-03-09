const user = {
    username: "kashyap",
    price: 199,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);  // will print username,price,welcomeMessage All

    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);              // will print {}

// function chai(){
//     console.log(this)
// }

// chai()

// const chai = function(){
//     let username = "kashyap"
//     console.log(this.username)
// }



const chai = () => {
    let username = "kashyap"
    console.log(this)
}

// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }


// const addTwo = (num1,num2) =>  num1 + num2     // Same as upper one 

// const addTwo = (num1,num2) =>  (num1 + num2)


const addTwo = (num1, num2) => ({ username: "kashyap" })

console.log(addTwo(3, 4));

const myArray = [2, 3, 8, 4, 6]

myArray.forEach()