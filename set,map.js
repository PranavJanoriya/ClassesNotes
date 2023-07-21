const { log } = require("console");

let  set1 = new Set() 
set1.add(22)

console.log(set1);

const array1 = [1, 2, 3, 4, 4]

let set2 = new Set([...array1]) ;  

console.log(set2);
// Output :-  Set(4) {1, 2, 3, 4}
// Note :- Set is to save a only for the uniqe value.
console.log(set1.size);

// Set Difference Start

const setA = new Set()

setA.add(10) 
setA.add(20)


console.log(setA);

const setB = new Set()

setB.add(20)
setB.add(30)
setB.add(40)

console.log(setB);

// Set Same word 
function setsame(setA, setB){
     return new Set([...setA].filter(e => setB.has(e)))
}
console.log(setsame(setA, setB));
// Set Diffence 
function setdiffence(setA, setB){
     return new Set([...setA].filter(e => !setB.has(e) ))
}
console.log(setdiffence(setA, setB));

// Set End 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

//        Map Start

let newmap = "Map Start"

console.log(newmap);

let map = new Map() ;

console.log(map.size) ;

 let arr = [
     [1, "Ajay"],
     [2, "mangal"],
     [3, "Vijay"],
     [4, "Sayam"],
     [5, "Ramu"]
]


arr.map((arrayitem) => map.set(arrayitem[0], arrayitem[1])) ;

console.log(arr);

console.log(map.size) ;

console.log(map.get(1))