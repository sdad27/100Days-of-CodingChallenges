//Iterating Over Object Properties: Write a function that takes an object as an argument and logs all 
//of its properties and values.


function objProperty(obj : {[key : string] : (string|number)}) {
    for(let key in obj){
        if (obj.hasOwnProperty(key)) {
            console.log(`${key} : ${obj[key]}`);
            
        }
    }
}
objProperty({Make:"Toyota",Model:"Camry"});