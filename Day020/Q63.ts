// Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type 
// alias, including properties unique to each shape.

type Shape = {
    kind : "circle" | "rectangle",
    radius? : number,
    width? : number,
    height? :number,
}

let circle : Shape = {
    kind:"circle",
    radius:20,
}
let rectangle : Shape = {
    kind:"rectangle",
    width:20,
    height:10,
}

console.log(circle);

console.log(rectangle);
