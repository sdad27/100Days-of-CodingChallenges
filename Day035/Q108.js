// Compare two strings to check if they are identical, ignoring case sensitivity.
function compareString(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(compareString("Saeed", "saeed"));
console.log((compareString("World", "word")));
export {};
