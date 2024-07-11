// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.


let num : number[] = [1,2,3,4,5,6,7,8,9,10];

function calculateSum(num:number[]) {
    return num.reduce((total,sum) => total + sum, 0);
}

console.log(calculateSum(num));

