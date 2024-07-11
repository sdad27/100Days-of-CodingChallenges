// Convert a traditional function expression to an arrow function.

// Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. 
// They don't have their own bindings to this or super, and should not be used as methods.

let sum = function(a:number,b:number){
    return a + b;
}

let add = (a:number,b:number) =>  a + b;

console.log(sum(3,4));
console.log(add(3,4));

