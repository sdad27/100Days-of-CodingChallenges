// Iterate over a Map of student IDs and names, and log each pair to the console.
// Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, 
// providing access to each key-value pair.
let students = new Map();
students.set(1, "saeed");
students.set(2, "ahmed");
students.set(3, "ali");
students.forEach((names, id) => {
    console.log(`${id} - ${names}`);
});
export {};
