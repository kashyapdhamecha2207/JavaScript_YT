const name = "kashyap"
const repoCount = 28

// console.log(name + repoCount + " value");    // not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);    // Modern method

const gameName = new String('Kashyap-D-com')


// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase()); 
// console.log(gameName.charAt(2));       // s
// console.log(gameName.indexOf('s'));    // 2
// console.log(gameName.indexOf('k'));    // -1
// console.log(gameName.indexOf('z'));    // -1

const newString = gameName.substring(0, 4)     // dont obbey negative value
// console.log(newString);    

const anotherString = gameName.slice(-8,4)     // negative value also allow(count from last position)
console.log(anotherString);    

const newStringOne = "     kashyap     "
// console.log(newStringOne)           // Will print blank space 
// console.log(newStringOne.trim())    // Will remove blank space 

const url = "https://kashyap.com/kashyap%20dhamecha";

console.log(url.replace('%20' , '-'))      // using for replace value anything

console.log(url.includes('kashyap'));   // will give answer in boolean

console.log(gameName.split('-'));     // will split things you inserted in
