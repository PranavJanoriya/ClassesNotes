// Array 
let arr = [1, 2, 3, 4, 5];

console.log(arr);

//          Last element

// Array Push {Add the last elemnt} 
arr.push(6, 7);

console.log(arr);

// Array Pop {Delete the last element}
arr.pop();

console.log(arr);
//          Statring Element 

// Array shift {add the starting element}
arr.shift(); 

console.log(arr);

// Array unshift {add the starting element}
arr.unshift(1);

console.log(arr);
// 

// Array concat {}
let a1 = [1, 2];
let a2 = [4, 5, 6];
let a3 = a1.concat(a2);

console.log(a3)

// Array Join 
let s = arr.join();

console.log(s);

let p = arr.join(a1);

console.log(p);

// Array Reverse 
let n = arr.reverse(); 

console.log(n);

// Array indexOf { Search the element }
let m = arr.indexOf(7);

console.log(m);

// Array indexOf { Search the element (dont search) }
let q = arr.indexOf(76); 

console.log(q); 

// Array Slice { console.log(Arrayname.slice(start element, end element))}
let w = arr.slice(0, 2);

console.log(w);

// Array Splice { arr.splice(add element possion, No. of delete elemnet, element  )} 
let e = arr.splice(2, 5);

console.log(e);



