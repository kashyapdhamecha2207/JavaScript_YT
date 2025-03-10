// if

const isUserloggedIn = true;
const temperature = 41;

// if (temperature < 50) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute")
// > , < , >= , <= , == , === , != , !==

// const score = 200;
// if(score>100){
//     let power = 'fly'
//     console.log(`User Power: ${power}`);
// }

// console.log(`User power: ${power}`); // ReferenceError: power is not defined


// const balance = 1000;

// if (balance > 500) console.log("test"),console.log("test2");

// if(balance<500){
//     console.log("balance is less than 500");
// }else if(balance<750){
//     console.log("balance is less than 750");
// }else if(balance<900){
//     console.log("balance is less than 900");
// }else console.log("balance is greater than 900");

const userLoggedIn = true;
const DebitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && DebitCard && 2==2){
    console.log("User can purchase");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}