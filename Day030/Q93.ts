// Find the index of "Banana" in an array of fruits and replace it with "orange".

import { fruitsName } from "../Day030/Q92.js";

function fruits(fruitsName:string[]) {
    let index = fruitsName.indexOf("banana");
    if(index !== -1) fruitsName[index] = "orange";
}
fruits(fruitsName);
console.log(fruitsName);


