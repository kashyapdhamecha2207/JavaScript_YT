// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);      // true
console.log("02" > 1);     // true

console.log(null > 0);     // false
console.log(null == 0);    // false
console.log(null >= 0);    // true

// null >= 0 => true 
// bcz comparison operators(> , <) converts null to number and treat it as 0


// === (strictly checks)
console.log("2" == 2);  // true
console.log("2" === 2); // false

// this all will show "False"
console.log(undefined == 0);  // false 
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false
