// Advanced Array Destructuring: Given an array of objects representing different laptops, each with 
// properties make, model, and year, use array destructuring to assign the first and second laptops to 
// variables. Then, log these variables.

let laptops = [
    {
        make:"Apple",
        model:"MacBook Pro",
        year:2020,
    },
    {
        make:"Apple",
        model:"Macbook Air",
        year:2022,
    }
];
let [laptop1,laptop2] = laptops;

console.log(laptop1);
console.log(laptop2);









