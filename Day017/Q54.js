// Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section 
// based on what you need at that moment, like adjusting labels based on user choices.
let createObjectKeys = (key, value) => {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
};
let userPreference = createObjectKeys("name", "saeed");
console.log(userPreference);
export {};
