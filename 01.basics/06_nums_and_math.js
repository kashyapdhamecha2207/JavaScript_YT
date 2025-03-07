const score = 400
// console.log(score);

const balance = new Number(100)
const balance1 = new Number(false)    // will print 0
const balance2 = new Number(true)     // will print 1

// console.log(balance);


// console.log(balance.toString().length);     // 3
// console.log(balance.toString());            // 100
// console.log(balance.toFixed(2));            // 100.00

const otherNumber = 23.8966
// console.log((otherNumber.toPrecision(3)));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());     // 10,00,000

// console.log(Math);
// console.log(Math.abs(-4));       // 4
// console.log(Math.round(4.6));    // 5
// console.log(Math.ceil(4.2));     // 5
// console.log(Math.floor(4.9));    // 4  (using for round-off)
// console.log(Math.min(4 , 3 , 4 , 5 ,8));    // 3
// console.log(Math.max(4 , 3 , 4 , 5 ,8));    // 8

// console.log(Math.random()*6 + 1);
// console.log(Math.floor(Math.random()*6) + 1); will print 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);    