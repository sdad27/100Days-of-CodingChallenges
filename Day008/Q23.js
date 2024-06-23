// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your 
// prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let name = "saeed";
console.log("Is name == 'saeed' ? I predict True");
console.log(name == "saeed"); //true
console.log("Is name.lenght == 5 ? I predict True");
console.log(name.length == 5); //true
console.log("Is name.toLowerCase() == 'saeed' ? I predict True");
console.log(name.toLowerCase() == "saeed"); //true
console.log("Is typeof(name) == 'string' ? I predict True");
console.log(typeof (name) == "string"); //true
console.log("Is name.lenght >= 5 ? I predict True");
console.log(name.length >= 5); //true
console.log("\nIs name == 'Saeed' ? I predict True");
console.log(name == "Saeed"); //false
console.log("Is name.lenght == 6 ? I predict True");
console.log(name.length == 6); //false
console.log("Is name.toUpperCase() == 'saeed' ? I predict True");
console.log(name.toUpperCase() == "saeed"); //false
console.log("Is name.toLowerCase() == 'SAEED' ? I predict True");
console.log(name.toLowerCase() == "SAEED"); //false
console.log("Is name.lenght < 5 ? I predict True");
console.log(name.length < 5); //false
export {};
