//             Scoping 
let score1 = 2
function one() {
     let score = 0;
     console.log(score);
}

one();
// console.log(score);  // Error 
// Note Point : - Its is not acess to function inner side values

function two() {
     // let score = 1 
     console.log(score);
}
// two()   // Error 
// Its is not acess to other function value 

function three() {
     console.log(score1);
}
 three()   // 2
 console.log(score1);  // 2 
//  Its is to acess a outer value of function 

function Outerfunc() {
     let outVar = "I am a Outer Scope 1 "
     function Innerfunc() {
          let innerVar = "I am a Inner Scope 1 "
          console.log(outVar);
     }
     // console.log(innerVar); // Error
     Innerfunc()
}

Outerfunc() // I am a Inner Scope 1 
// Note Point : - Its say  to the a inner funtion outer function value acess 
// But a outer funtion is not acess to Inner funvtion value 

function Onefunc() {
     let Scope = "I am a outer scope 2 "
     function Twofun() {

     }
}

const MyGlobalue = 0 ;

function func() { 
     let val1 = 1
     function Innerfunc() {
          let val2 = 2 
          console.log(val2, val1, MyGlobalue);
     function InnertoInnerfunc() {
          let val3 = 3 
          console.log(val3, val2, val3, MyGlobalue);
     }
     InnertoInnerfunc()
     }
     Innerfunc()
}

func()