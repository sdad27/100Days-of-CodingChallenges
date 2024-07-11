// Write a JavaScript object and convert it into a JSON string.
let person = {
    name: "Saeed",
    age: 28,
    city: "Karachi"
};
let jasonString = JSON.stringify(person);
console.log(jasonString);
export { person, jasonString };
