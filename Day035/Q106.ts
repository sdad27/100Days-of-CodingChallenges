// Determine if a given year is a leap year using comparison operators.

function isLeapYear(year:number) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2020));

console.log(isLeapYear(2019));
