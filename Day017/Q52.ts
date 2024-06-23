// Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, 
// model, and other key features like how much storage it has, the size of its screen, and how long its 
// battery lasts.

interface Smartphone{
    brand:string;
    model:string;
    specs:{
        storage:number;
        screensize:number;
        battery:number;
    }
}

let smartphone : Smartphone = {
    brand:"Apple",
    model:"iPhone 15 Pro Max",
    specs:{
        storage: 128,
        screensize:6.7,
        battery:6000,
    }
}
console.log(smartphone);
