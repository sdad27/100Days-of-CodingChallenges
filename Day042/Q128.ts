// Create an arrow function that takes multiple parameters and returns the product of all parameters.

// Explain & TIP: Arrow functions can take zero, one, or multiple parameters. When dealing with multiple 
// parameters, you enclose them in parentheses.

let multipleParameter = (...num:number[]) =>{
    return num.reduce((num1:number,num2:number) => num1 * num2, 1);
}
console.log(multipleParameter(2,3,4));

