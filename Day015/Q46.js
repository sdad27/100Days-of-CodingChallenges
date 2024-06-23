// Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, 
// and a method describe() that logs a sentence about the laptop.
let laptop = {
    make: "Apple",
    model: "MacBook Pro",
    year: 2022,
    describe: function () {
        console.log(`This is a ${this.year},${this.model} model, ${this.make} manufacturer`);
    }
};
laptop.describe();
export {};
