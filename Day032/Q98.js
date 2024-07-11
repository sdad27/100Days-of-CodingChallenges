// Create a JavaScript snippet that calculates and logs how many days are left until New Year.
function calculateDays() {
    let now = new Date();
    let newYear = new Date(now.getFullYear() + 1, 0, 1);
    let diff = newYear.getTime() - now.getTime();
    let days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(calculateDays() + " " + "days until new year");
export {};
