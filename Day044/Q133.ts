// Write a JavaScript object and convert it into a JSON string.

// Explain & TIP: JSON (JavaScript Object Notation) is a lightweight data-interchange format. 
// It's easy for humans to read and write and for machines to parse and generate. Converting a JavaScript 
// object into a JSON string can be done using JSON.stringify().

type Person = {
    name:string,
    age:number,
    city:string
}
let person:Person = {
    name: "Saeed",
    age : 28,
    city : "Karachi"
}

let jasonString = JSON.stringify(person);
console.log(jasonString);

export{person,jasonString}

