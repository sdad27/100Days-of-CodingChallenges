// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try 
// more comparisons, write more tests. Have at least one True and one False result for each of the 
// following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let name : string = "saeed";

console.log(name == "saeed"); //true
console.log(name == "Saeed"); //false

console.log(name.toLowerCase() == "saeed"); //true
console.log(name.toLowerCase() == "SAEED"); //false

console.log(5 == 5); //true
console.log(5 != 5); //false

console.log(5 < 6); //true
console.log(5 > 6); //false

console.log(6 >= 6); //true
console.log(6 <= 5); //true

console.log(5 < 6 && 6 > 5); //true
console.log(5 < 6 || 6 < 5); //true

let names : string[] = ["saeed","ahmed"]
console.log(names.includes("saeed")); //true
console.log(names.includes("ali")); //false













