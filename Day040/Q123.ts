// Create a loop that iterates through a string and stops when it finds the first vowel.

// Explain & TIP: To find a specific character in a string, you can iterate through each character and use 
// a condition to check for vowels. The loop can stop once a vowel is found.

function vowels(str:string) {
    let vowel = "aeiouAEIOU";
    for (let char of str) {
        if (vowel.includes(char)) {
            console.log(`first vowel found : ${char}`);
            break;
        }
        console.log(char);
        
    }
}
vowels("Hello world");