// Add a Special Number: Make a program that creates custom adders. These adders can add a specific number 
// to any other number you give them later.

function makeAdder(addToValue : number) {
    return function(number : number){
        return number + addToValue;
    }
}

let addFour = makeAdder(4);

console.log(addFour(4));

