// Modify a method in an object to use the this keyword to access another property in the same object.
// Explain & TIP: You can leverage the this keyword to interact with multiple properties within the same object, 
// providing a cohesive way to manipulate internal data.
let person = {
    name: "Ahmed",
    age: 28,
    getName: function (newName) {
        return this.name = newName + " " + `age is ${this.age}`;
    }
};
console.log(person.getName("Saeed"));
export {};
