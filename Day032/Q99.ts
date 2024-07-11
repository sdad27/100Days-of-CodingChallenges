// Generate a date object representing your next birthday and log it to the console.

function nextBirthday(month:number,day:number):Date {
    let today = new Date();
    let year = today.getFullYear();
    let birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
        
    }
    return birthday;
}

let nextBirthdayOn = nextBirthday(6,24);
console.log("next birthday on : " + " " + nextBirthdayOn.toLocaleString());

 


