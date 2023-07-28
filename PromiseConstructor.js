//        Promise Constructor 
//             Resolve Mode 
function crreatePromise() {
     return new Promise(function exec(resolve, reject){
          //  Your code goes here 
          setTimeout( function f(){
               console.log("Timer Done");
               resolve("Done");
               // reject(404);
          }, 9000);

     })
}

console.log("Start");
let x = crreatePromise();
console.log(" Got a new Promise ");
x.then( function f(value) {
     console.log("Promise",value);
}).catch(function n(value){
     console.log("Pleace Try Again Error", value);
}).finally(function g(){
     console.log("I am Finally Done");
})
console.log("End");

for(let i = 0; i<100; i++) {
     // Some code
}

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//        Reject Mode 

function crreatePromise1() {
     return new Promise(function exec(resolve, reject){
          //  Your code goes here 
          setTimeout( function f(){
               console.log("Timer Done");
               // resolve("Done");
               reject(404);
          }, 9000);

     })
}

console.log("Start");
let y = crreatePromise1();
console.log(" Got a new Promise ");
y.then( function f(value) {
     console.log("Promise",value);
}).catch(function n(value){
     console.log("Pleace Try Again Error", value);
}).finally(function g(){
     console.log("I am Finally Done");
})
console.log("End");

for(let i = 0; i<100; i++) {
     // Some code
}
