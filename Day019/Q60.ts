// Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's 
// name and age.

let userProfile = (function(){
    let name = "saeed";
    let age = 28;

    return {
        displayInfo : function(){
            console.log(`Name ${name} and Age ${age}`);
            
        }
    };
})();
userProfile.displayInfo();


