//Problem N1

// const height = 5;
// const base = 4;

// const side1 = 5;
// const side2 = 3;

// const areaTriangle = (height * base) / 2;
// const areaRectangle = side1 * side2;


// if (areaTriangle > areaRectangle) {
//     console.log("Triangle has greater area");
// }
// else if (areaTriangle < areaRectangle) {
//     console.log("Rectangle has gretaer area");
// }
// else {
//     console.log("The area of rectangle is equal to the area of triangle");
// }








//Problem N2
// we have a*x^2 + b*x + c = 0 equation.

// const a = 0;
// const b = -4;
// const c = 3;

// if (a === 0) {
//     let x = -c / b;
//     console.log(x);
//     return;
// }
// const d = (b ** 2) - 4 * a * c;
// if (d < 0) {
//     console.log("Unsolvable");
// }
// else if (d > 0) {
//     let x1 = (-b + Math.sqrt(d)) / 2 * a;
//     let x2 = (-b - Math.sqrt(d)) / 2 * a;
//     console.log(`The first solution is ${x1}`);
//     console.log(`The second solution is ${x2}`);
// }
// else if (d === 0) {
//     let x0 = (-b) / (2 * a);
//     console.log(`The only solution is ${x0}`);
// }





//Problem N3

// const x1 = 4;
// const y1 = 4;

// const x2 = 0;
// const y2 = 0;

// const length = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

// console.log(length);



//Problem N4

// const x1 = 4;
// const y1 = -5;

// const x2 = 2;
// const y2 = -6;

// if (x1 === 0 || x2 === 0 || y1 === 0 || y2 === 0) {
//     console.log("The coordinates should be either positive or negative");
//     return;
// }

// const length = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

// console.log(length);