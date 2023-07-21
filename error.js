const { log } = require("console");

//   Try and Catch 
try{
     //Its part to enter in the Proble crate code for the running
} catch{
     //Its Part to enter in the soluction for try write code to running time to crate the problemto automatically running to the catch 
}
//  Example 

try{
     let t = "Its to succesfull run (1)"
     console.log(t);

     let p = a;
     console.log(p);
} catch (err) {
     console.log("Its problme create (1)");
}

// Try Catch and Finally
try{
     let t = "Its to succesfull run (2) "
     console.log(t);

     let p = a;
     console.log(p);
} catch (err) {
     console.log("Its problme create (2)");
}finally{
     console.log("FInally");
}

// =======================================================================
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ========================================================================

// Start to Classes 
class Product {
// Properties -> variables -> Data Member 
     // name;
     // price;      // this is not importent 
     // ratting;   

     constructor(n, p, r) {
          console.log("this is constructor");
          this.name = n ;
          this.price = p; 
          this.ratting = r;
          // return 10; if you're returing primitive then it will be avoided in constructor            
          // return {x: 10, y: 20}  ;  // if you return non printive then it will be returned 
      }
// Behaviours -> function -> member functions
     display() {
          console.log("the main");
     }
}

let p = new Product("pen", 50, 2);  // new -> creates an empty plain object 
// -> in the above piece of code we are calling the constructor method
console.log(p);
p.display();


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Blueprinting for the without classes 

function Product1(n, p, r) {
     this.name = n ;
     this.price = p; 
     this.ratting = r;
}

let p2 = new Product1("airport", 1200000, 5);

 console.log(p2);

/**
 *1. this keyword in js is diff then other languages 
 *2. this keyword refres to the context from where we called 

In this function constructor also 
 - if you return primitive it is ignored and we return the object referred by this 
 - if you return a custom obj, then the custom obj is returned 
 - if you dont return anything, then object referend by this is returned 
 */

let x = {
     p: Product1
}

x.p("phone", 12000, 3);

console.log(x);

//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//        classes is Don't work for the a Array function 

// const Product2 = (n, p, r) => {
//      this.name = n ;
//      this.price = p; 
//      this.ratting = r;
// }

// const p3 = new Product2("Product-3", 12000, 5)
// console.log(p3);`

// Output :- TypeError: Product2 is not a constructor
// Region :- The Theory of this keyword pointing to calling context is not applicable with arrow Function 


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Object Form in the Blueprint \
// Simple Object Function 

let obj = {
     x: 10,
     fun()  {
          console.log(this.x);
     }
}

obj.fun()

//  Array Object Function is not run  
let obj1 = {
     x: 10,
     fun:() => {
          console.log(this.x);
     }
}

obj1.fun()

//  array function is to run 

let obj2 = {
     x: 10,
     fun() {
          y = {
               gun: () => {
                    console.log(this.x);
               }
          }
          y.gun();
     }
}

obj2.fun()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//        Static Propertey for the classes 

class Product2 {
// Properties -> variables -> Data Member 
     // name;
     // price;      // this is not importent for the public use data show 
     // ratting;   

     constructor(n, p, r) {
          console.log("this is constructor");
          this.name = n ;
          this.price = p; 
          this.ratting = r;
          // return 10; if you're returing primitive then it will be avoided in constructor            
          // return {x: 10, y: 20}  ;  // if you return non printive then it will be returned 
          }

          static custom() {
          console.log("this is the Static");
          }
// Behaviours -> function -> member functions
     display() {
          console.log("the main");
     }
}


let q = new Product2("jay", 1000, 2)

console.log(q);
q.display();
//   The single element update to the product proprties 
 let z = q.name ="tiger"
 console.log(z); 
// q.custom(); // Its to don't a called in this type(Its to the don't call for the object).
// The static function to call in the use of the class name.

Product2.custom();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Privet acesses provied in the classes 

class Product3 {
// Properties -> variables -> Data Member 
          // name;
          // price;      // Its to importent for the use in element to declear in this area for the privet  
     

          #ratting;   
     
          constructor(n, p, r) {
               console.log("this is constructor");
               this.name = n ;
               this.price = p; 
               this.#ratting = r;
               // return 10; if you're returing primitive then it will be avoided in constructor            
               // return {x: 10, y: 20}  ;  // if you return non printive then it will be returned 
               }
     
     // Behaviours -> function -> member functions
          display() {
               console.log("the main");
          }
     }
     
let t = new Product3("Privet Property", 10000, 10)
// t.ratting = 20``;
// Its don't update // Its for the proble crate for the running in this code 
console.log(t);

// Output :- Product3 { name: 'Privet Property', price: 10000 }
// Notepoint :- Its to the don't show to the ratting (ratting is to the privet dont to acesses Provide to watch and update)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//        Getter and Setter

class Product4 {
     // Properties -> variables -> Data Member 
               // name;
               // price;      // Its to importent for the use in element to declear in this area for the privet  
          
     
               #ratting;   
          
               constructor(n, p, r) {
                    console.log("this is constructor");
                    this.name = n ;
                    this.price = p; 
                    this.#ratting = r;
                    // return 10; if you're returing primitive then it will be avoided in constructor            
                    // return {x: 10, y: 20}  ;  // if you return non printive then it will be returned 
                    }
          
//                      Getter and Setter Apply 
               
               // Its to use in the function form (1)
               getRatting() {
                    console.log(this.#ratting);  
               }    

               setRatting(r) {
                    if(r < 0) return;
                    this.#ratting = r;
               }
               // 
               // a another trick for the write in this method 
          // Propeerty type write (2)
          Rattinggetter() {
               console.log(this.#ratting);  
          }    

          Rattingsetter(r) {
               if(r < 0) return;
               this.#ratting = r;
          }
          // Behaviours -> function -> member functions
               display() {
                    console.log("the main");
               }
          }
     
let e = new Product4("Mac", 100000, 10)

console.log(e);
//   Its for the callback of the (1) function type getter and setter method
e.setRatting(20);
e.getRatting();
// //   Its for the callback of the (2) Property type getter and setter method
e.Rattingsetter(10);
e.Rattinggetter();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Complex Number function 
class ComplexNumber1{
     #real;
     #img;
     constructor(r, i) {
          this.#real = r;
          this.#img = i;
     }

     display(){
          console.log(this.#real, "and", this.#img);
     }
}

let c1 = new ComplexNumber1(1,2)
console.log(c1);
c1.display();

// Complex number add function
class ComplexNumber2{
     #real;
     #img;
     constructor(r, i) {
          this.#real = r;
          this.#img = i;
     }

     display(){
          console.log(this.#real, "and", this.#img);
     }
     get real1() {
          return this.#real;
     }
     get img1() {
          return this.#img;
     }
     addComplexNumber(c) {
         this.#real += c.this.real1;
          this.#img += c.this.img1;
     }
}

let c2 = new ComplexNumber2(5,6)
console.log(c2);
c2.display();
let c3 = new ComplexNumber2(4, 8);
c2.addComplexNumber(c2);
c2.display();
console.log(c3);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




