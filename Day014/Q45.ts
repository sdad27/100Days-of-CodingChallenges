// Cars: Write a function that stores information about a car in a Object. The function should always 
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, such as a color or an 
// optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

interface Car{
    manufacturer:string;
    modelName:string;
    color?:string;
    year?:number;
}

function makeCar(manufacturer:string,modelName:string,optional?:{color:string,year:number}):Car {
    let cars:Car = {
        manufacturer,
        modelName,
        ...optional,
    }
    return cars;
}
console.log(makeCar("Toyota","Camry",{color:"blue",year:2021}));
