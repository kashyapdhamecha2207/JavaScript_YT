var c = 300;
let a = 300

if (true) {
    let a = 10
    const b = 20
    console.log("Inner : ",a);       // will print 10
    var c = 30
}

// console.log(a);        // will print 300
// console.log(b);
// console.log(c);        // will print 30
