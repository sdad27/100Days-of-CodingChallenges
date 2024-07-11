// Write an if statement that logs "Good Morning" if the current time is before 12 PM.

const currentDate = new Date();

if (currentDate.getHours() < 12) {
    console.log("good morning");
    
}else{
    console.log("time over");
    
}