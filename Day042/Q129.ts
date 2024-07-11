// Explain how this behaves differently in arrow functions compared to traditional functions.

// Explain & TIP: In traditional functions, this refers to the object that called the function, 
// which can vary depending on the context. In arrow functions, this is lexically bound, meaning it uses 
// this from the code that contains the arrow function.

let func = {
    personName : "Saeed",
    getName : function(){
        console.log(`traditional function ${this.personName}`);
    },
    
    getArrow : () =>{
        
        // console.log(`arrow function ${personName}`); //this line comment due to error bcz this. and a personName is not excepted in arrrow function it gives the error
            
        }
    
}
console.log(func.getName());
console.log(func.getArrow());


// const traditionalVsArrow = {
//     value: "traditionalVsArrow value",
//     traditionalFunction: function () {
//       console.log("Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
//     },
//     arrowFunction: () => {
//       console.log("Arrow function:", this.value); // 'this' is not bound to traditionalVsArrow object but to the scope in which traditionalVsArrow was defined
//     },
//   };
  
//   traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
//   traditionalVsArrow.arrowFunction();
