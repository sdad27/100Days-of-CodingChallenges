// Implement a switch statement that evaluates an expression and uses the default case if none of the cases 
// match.

// Explain & TIP: The default case in a switch statement provides a way to execute a block of code when 
// none of the other case labels match the expression's value.

function evaluateExprwessions(grades:string) {
    switch (grades) {
        case "A":
            console.log("Excellent");
            break;
        case "A1":
            console.log("Good");
            break;
        case "B":
            console.log("Fair");
            break;
        case "C":
            console.log("Satisfactory");
            break;

        case "D":
            console.log("need improvement");
            break;

        case "F":
            console.log("fail");
            break;
    
        default:
            console.log("invalid grade");
            
            break;
    }
}

evaluateExprwessions("A");