//             Resolve Mode 
function crreatePromise() {
     return new Promise(function exec(resolve, reject){
          //  Your code goes here 
          setTimeout( function f(){
               console.log("Timer Done Resolve");
               resolve("Done");
               // reject(404);
          }, 9000);

     })
}

//        Reject Mode 

function crreatePromise1() {
     return new Promise(function exec(resolve, reject){
          //  Your code goes here 
          setTimeout( function f(){
               console.log("Timer Done Reject");
               // resolve("Done");
               reject(404);
          }, 9000);

     })
}


//       Resolve Async and await 

async function consume1(){
     return 10 ;
}
console.log(consume1()); // Promise(10)
async function consume2(){
     console.log("Inside Function");
     const responce = await crreatePromise();
     console.log("Responce is", responce);
}
console.log("Start");
consume2();
console.log("End");

//       Reject Async and await 

async function consume3() {
     try{
          
     console.log("Inside Function");
     const responce = await crreatePromise();
     const responce1 = await crreatePromise1();
     console.log("Responce is", responce1);          
     } catch (err){
          console.log("Handle", err);
     }
}

consume3();

//             Fetch API 

fetch("https://type.fit/api/quotes")
.then(function f(responce){
     return responce.json();
})
.then(function f(value) {
     console.log(value);
})
