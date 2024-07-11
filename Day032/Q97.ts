// Write a function that returns the current date in the format "DD-MM-YYYY".

function currentDate() {
    let nowDate = new Date();
    let day = String(nowDate.getDate()).padStart(2,'0');
    let month  = String(nowDate.getMonth() + 1).padStart(2,'0');
    let Year = nowDate.getFullYear();

    return`${day}-${month}-${Year}`;
}

console.log(currentDate());
