// Write a function to remove the last element from an array and return the removed element.

let fruitsName : string[] = ["apple","mango","banana","lichi"];

function remove(fruitsName:string[]) {
    return fruitsName.pop()
}
console.log(remove(fruitsName));
console.log(fruitsName);

export{fruitsName};

