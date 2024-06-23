// Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that 
// represents a number (e.g., "5"). Return their sum as a number.


function add(num1:number,numberString:string) {
    return num1 + Number(numberString);
}
console.log(add(3,"4"));
