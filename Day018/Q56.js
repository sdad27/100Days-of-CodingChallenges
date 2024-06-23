// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
let mixedArray = ["saeed", "ahmed", 1, 2, 3, 4, "true"];
let stringArray = mixedArray.filter(items => typeof (items) === "string");
console.log(stringArray);
export {};
