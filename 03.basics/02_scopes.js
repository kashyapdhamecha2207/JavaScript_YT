var c = 300;
let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("Inner : ", a);       // will print 10
    var c = 30
}

// console.log(a);        // will print 300
// console.log(b);
// console.log(c);        // will print 30


function one() {
    const username = "Kashyap"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if (true) {
    const username = "Kashyap"
    if(username === "Kashyap"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website);
    
}
// console.log(username);


// +++++++++++++++  Interesting  +++++++++++++++++++++++++

function addone(num){
    return num + 1
}

addone(5)



// addTwo(5)         // Will throw error because here we not only declare function but also store it in a variable

const addTwo = function(num){
    return num + 2
}

addTwo(5)

console.log(addTwo);              // [Function: addTwo]
console.log(addTwo());            // NaN
console.log(addTwo(5));           // 7
