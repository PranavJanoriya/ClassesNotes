const { log } = require("console");

let myhero = ["spiderman", "superman"]
let dchero = ["janraj", "ram"]

let heropower = {
     spiderman: "hamer",
     superman : "Superpower"
}
// Object case
// Its to the acess of the any array to object 
Object.prototype.pranav = function() {
     console.log("Pranav is all array present");
}

console.log(myhero.pranav()); 
// For Array case to 
// Any array to array
Array.prototype.Pranav = function() {
     console.log("I am Present");
}

console.log(myhero.Pranav()); //A array use the all proporties acess the array 
// console.log(heropower.Pranav()); //A array use the all proporties don't acess the to the object 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Inheritence

const User = {
     name : "Pranav",
     email : "janoriya@mail.in"
}

const Teacher = {
     makeVideo : true
}

const TeachingSupport = {
     isavailable : false
}

const TAAssistent = {
     makeassignment : "JS Assignment",
     fulltime : true,
     // (1) type 
     __proto__: TeachingSupport
} 

console.log(TAAssistent.isavailable); // False

//(2) type
Teacher.__proto__ = User

console.log(Teacher.name); //Pranav

// (3) type 
Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(TeachingSupport.isavailable); // false     

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// String to object acess 

String.prototype.truelength = function() {
     console.log(`The true length ${this.trim().length}`);
}

"Janoriya     ".truelength()
"ramhiram     ".truelength()
