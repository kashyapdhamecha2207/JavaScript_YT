const marvel_heros = ["thor", "ironman", "captain"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // [ 'thor', 'ironman', 'captain', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); // flash

// const Heors = marvel_heros.concat(dc_heros)  // NOTE : concat works only in new array
// console.log(Heors); // [ 'thor', 'ironman', 'captain', 'superman', 'flash', 'batman' ]

const all_heros = [...marvel_heros, ...dc_heros]  // Spread Operator => [ 'thor', 'ironman', 'captain', 'superman', 'flash', 'batman' ]

// console.log(all_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);  // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Kashyap"));    //  Boolean answer - false
console.log(Array.from("Kashyap")); // ['K', 'a', 's', 'h', 'y', 'a', 'p' ]
console.log(Array.from({ name: "Kashyap" })); // Will give empty array []  (Intrested)

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3))   // [ 100, 200, 300 ]