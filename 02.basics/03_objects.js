// singleton
// Object.create

// Object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "Kashyap",
    "full name" : "Kashyap Dhamecha",
    age: 18,
    [mySym] : "mykey1",  // For treating it as s symbol must use []
    location: "Ahmedabad",
    email: "kashyap.dhamecha.cg@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);  // for this case you must use square notation

Jsuser.email = "kashyap@google.com"
// Object.freeze(Jsuser) // It will freeze the object and you can't change the value of object
Jsuser.email = "kashyap@microsoft.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(Jsuser.greeting);
// console.log(Jsuser.greeting());  
console.log(Jsuser.greetingTwo());  