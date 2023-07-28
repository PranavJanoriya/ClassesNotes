//        Callback 

function h (x, fn) {
     // h -> is the HOF(higher order of function)
     // fn -> is callback
     console.log(x*x);
     fn(x*x);
}

// Callback in this function 


h(10, squer);

function squer(y) {
     console.log("The Squer of this value ", y);
}

console.log("New Code ");
console.log("Start");
setTimeout(function f(){
     console.log("Timer Done");
}, 1000)
let array = [1]
 console.log("End");
for (let i = 0; i < 100; i++) {
     console.log(i);
}
//  Resulte :- the resulte of this try to the a setTimout function is the a runtime function.
// The say of this code is to the a setTimeout function time is complete but a any function is run in this time perioed. to wait a print to the settimeout function. and complete a other function to print the set timeout funcction 

