// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer 
// programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific 
// skills from this list and show them.

let developerTool = {
    languages:["Javascript","Python","Java"],
    tools:["vs code","pycharm","visual studio"],
    frameworks:["React","Pycharm"]
}

let {languages,tools,frameworks} = developerTool;

console.log(`Language : ${languages[0]}, Tools : ${tools[0]}, Frameworks : ${frameworks[0]}`);



