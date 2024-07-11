// Creating and Accessing Object Properties: Construct an object representing a car with properties for make, 
// model, and year. Then, show how you can access the model property of the car.

interface Car{
    make:string;
    model:string;
    year:number;
}

let myCar:Car = {
    make:"Toyota",
    model:"Camry",
    year:2020,
}

console.log("my car is " + myCar.model);

export{myCar}
