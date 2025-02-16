// Function Expressions vs. Function Declarations: Compare function expressions and declarations by 
// creating one of each that performs the same task, such as squaring a number.

function declaration(num:number) {
    return num * num;
}

const expression = function(num1:number){
    return num1 * num1;
}

console.log(declaration(2));
console.log(expression(4));



