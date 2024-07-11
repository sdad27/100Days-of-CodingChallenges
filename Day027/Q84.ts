// Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the 
// word "JavaScript" with "TypeScript".

function replace(sentence : string) {
    return sentence.replace(/Javascript/g,"Python")
}

console.log(replace(`I love Javascript and Javascript is awesome !!!`));

