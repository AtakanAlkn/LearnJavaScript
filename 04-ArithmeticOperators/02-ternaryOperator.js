let isPressed = false;

isPressed
  ? console.log("isPressed is true") // if ture
  : console.log("isPressed is false"); // else if false

let number = 12,
  number2 = 15;

number2 > number
  ? console.log(`${number2} is greater than ${number}`)
  : console.log(`${number2} is less than ${number}`);

let c1 = (60 / 2) * 3;
let c2 = 60 / (2 * 3);

let x1 = 5;
let x2 = "5";

c1 == c2 && x1 == x2 ? console.log("True") : console.log("False"); // False and True
c1 == c2 || x1 == x2 ? console.log("True") : console.log("False"); // False or True

//Bonus

let currentDate = new Date().getFullYear();
console.log(currentDate);
