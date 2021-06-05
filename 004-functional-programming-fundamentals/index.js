let a = 10;
let b = 20;
console.log(a+b);


function sayHello(){
    return "Hello World";
}


/*

let fn = sayHello; // setting function reference

console.log(fn());

*/

/* 
  ---  Calling function as parameter ---
  


function hai(fnPointer){
    console.log(fnPointer())
}

hai(sayHello);

*/


/* 
  ---  Function returns a function ---
  
*/

function sayHai(){
   return function() {
       return "hi.. Yoga";
   }
}

function sayHaiNew(name){
    return (name) => {
        return "hi.. " + name;
    }
 }

let returnFunction = sayHai();
let greetings = returnFunction();

console.log(greetings);

