// Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
// Age groups can typically be categorized by specific ranges. For instance, you might consider anyone under 
// 13 a child, between 13 and 19 a teenager, and 20 or older an adult.

function categorized(age:number) {
    if (age < 13) {
        return "child";
    }else if(age >= 13 && age <= 19){
        return "teenager";
    }else if(age >= 20){
        return "adult"
    }
}

console.log(categorized(11));
console.log(categorized(15));
console.log(categorized(28));


