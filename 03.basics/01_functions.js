function sayMyName() {
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("Y");
    console.log("A");
    console.log("P");
}

// sayMyName()

// function addTwoNumbers(num1 , num2){
//     console.log(num1+num2);
// }

// function addTwoNumbers(num1 , num2){
//     let result = num1 + num2;
//     console.log("Kashyap");           // will print kashyap also(console.log)
//     return result
// }

// function addTwoNumbers(num1 , num2){
//     let result = num1 + num2;
//     console.log("Kashyap");           // will not print kashyap also(console.log)
//     return result
// }

// const result = addTwoNumbers(3,5)

// console.log("Result: ", result);

function loginUserMessage(username) {
    if (!username) {
        console.log("Please provide a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Kashyap"))
// console.log(loginUserMessage())       // will print undefined just logged in


// function calculateCartePrice(val1, val2, ...num1) {
//     return num1     // [ 500, 2000 ]
// }

// console.log(calculateCartePrice(100, 200, 500, 2000));

const user = {
    username: "Kashyap",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username in ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
} 

console.log(returnSecondValue(myNewArray));
