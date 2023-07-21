
// Spread Oprater
let spread = "Spread Operater strat" ;
console.log(spread);

const oneArray = [1, 2, 3, 4];

const twoArray = [4, 5, 6, 7, 8];

// first Trick 

const threeArray1 = oneArray.concat(twoArray);
console.log(threeArray1);
// Second Trick 
const threeArray2 = [...oneArray, ...twoArray];

console.log(threeArray2);
let spread1 = "spread Operater end" ;
console.log(spread1);

// +++++++++++++++++++++++++++++++++++++++++++++++++

// Rest Oprater
let rest = "Rest Operater strat" ;
console.log(rest);

function manyArray () {
     let arr = Array.from(arguments)
     let main = arr.map(e => e )
     console.log(main);
}

console.log(1, 2, 3, 4, 5, 6);
console.log(2, 3, 5, 6, 6,7,9);

let rest1 = "Rest Operater" ;
console.log(rest1);

function manyArray2 (...arg) {
     let finalArray = arg.map(e => e)
     console.log(finalArray);
}
console.log(1, 2, 3, 4, 5, 6);
console.log(2, 3, 5, 6, 6,7,9);

function jay (...value) {
     return value 
}

// Its a rest operater :- Its to work to the values to crate a array 

console.log(jay("super", "jaybabu"));

const rest2 = "Rest end "
console.log(rest2);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

const site = "PWskill"

console.log({...site});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
