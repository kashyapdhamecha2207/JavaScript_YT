// for of

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);   
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if (greet == " ") continue
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")            // will not print bcz map is unique value

// console.log(map);
// console.log(typeof Map);           // Function

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const MyObject ={
    'game' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key,value] of MyObject) {
//     console.log((key , ":-" , value));        // Will throw error
// }

