// Show an example of a callback function used to filter an array of numbers.
// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented 
// by the provided function. This method is commonly used to search through an array and create a subset of it 
// based on certain criteria.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n1 = numbers.filter((num) => num > 5);
console.log(n1); // Output: [6, 7, 8, 9]
export {};
