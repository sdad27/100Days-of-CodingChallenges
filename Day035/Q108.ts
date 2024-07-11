// Compare two strings to check if they are identical, ignoring case sensitivity.

function compareString(str1:string,str2:string):boolean {
    return str1.toLowerCase() === str2.toLowerCase();
}

console.log(compareString("Saeed","saeed"));
console.log((compareString("World","word")));

