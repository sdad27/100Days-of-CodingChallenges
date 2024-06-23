// They think of something you could store in a TypeScript Object. Write a program that creates Objects 
// containing these items.

type Car = {
    name:string,
    color:string,
    year:number,
};

let car1 : Car = {
    name:"BMW",
    color:"red",
    year:2020,
}

console.log(`The car name is ${car1.name}, the model is ${car1.year} & the color is ${car1.color}`);
