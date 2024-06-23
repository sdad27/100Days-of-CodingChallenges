// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. 
// Use the spread operator to combine these arrays into a single array sorted in ascending order, then log 
// the result.
let price1 = [1200, 1400, 1600];
let price2 = [1100, 1300, 1500];
let combinePrices = [...price1, ...price2].sort();
console.log(combinePrices);
export {};
