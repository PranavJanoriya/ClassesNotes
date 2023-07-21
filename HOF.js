// Cube Function use the (Function to Function)
function squer(n) {
     return n ** 2 ;
}

function cube(squer, n) {
     return squer(n) * n ;
}

console.log(cube(squer, 3));

// Simple Squre Function 

const Squre = (n, v) => {
     return n**v
 }
 
 console.log(Squre (2, 3))
 

// FUnction to function 

const one = (n) => {
     const two = (m) => {
          const three = (p) => {
              return  n + m+ p
          }
          return three 
     }
          return two 
}

console.log(one(2) (3) (4)); 
