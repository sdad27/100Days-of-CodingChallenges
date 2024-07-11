// Write a function that uses the .filter() method to return an array of numbers greater than 10.
let num = [5, 4, 10, 23, 12, 1];
function filterValue(num) {
    return num.filter(item => item > 10);
}
console.log(filterValue(num));
export {};
