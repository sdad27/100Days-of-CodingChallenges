// Use a switch statement to log the days of the week based on a number (1-7).
// Explain & TIP: A switch statement is a great way to select one of many code blocks to be executed. 
// It's particularly useful for scenarios like mapping numbers to days of the week.
function week(dayOfWeek) {
    switch (dayOfWeek) {
        case 1:
            console.log("sunday");
            break;
        case 2:
            console.log("monday");
            break;
        case 3:
            console.log("tuesday");
            break;
        case 4:
            console.log("wednesday");
            break;
        case 5:
            console.log("thursday");
            break;
        case 6:
            console.log("friday");
            break;
        case 7:
            console.log("saturday");
            break;
        default:
            console.log("invalid day no");
            break;
    }
}
week(6);
export {};
