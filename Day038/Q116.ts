// Create a switch case that matches several cases to the same code block, representing seasons.

// Explain & TIP: You can group multiple case statements together when they should execute the same block of 
// code, which is handy for categorizing items into broader groups.

function groupCases(month:number) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("summer");
            break;

        case 3:
        case 4:
        case 5:
            console.log("winter");
            break;
        
        case 6:
        case 7:
        case 8:
            console.log("autumn");
            break;

        case 9:
        case 10:
        case 11:
            console.log("spring");
            break;
    
        default:
            console.log("invalid month number");
            break;
    }
}

groupCases(2);