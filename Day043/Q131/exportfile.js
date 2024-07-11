// Create two modules; one that exports a class, and another that imports the class and creates an instance.
// Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and reusability 
// is a cornerstone of modern JavaScript application structure.
class animal {
    name;
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`the sound of ${this.name} is meow`);
    }
}
export { animal };
