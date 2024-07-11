// Updating Object Properties: Add a property named color to the existing car object, and then update the 
// year property to 2021. Show how to perform these operations.

interface Car{
    make:string;
    model:string;
    year:number;
    color?:string
}

let myCar:Car = {
    make:"Toyota",
    model:"Camry",
    year:2020,
}
myCar.color = "black";
myCar.year = 2021;

console.log(myCar.model);
console.log(myCar);


