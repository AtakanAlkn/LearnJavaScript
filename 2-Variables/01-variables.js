//Variables declaration
let car; // Just defined
cat = "Volvo"; // Variable assignment
console.log(car); // to see changes in console
// "let" is mutable  so can be changed after defining

{
  let x = 5;
  console.log(x);
  // Variables declared inside a { } block cannot be accessed from outside the block:
}
// console.log(x); Output : x is not defined , Try it

//Variables initializng
const password = "123oiWsad2.23";
console.log(password);
// const stands for constant and immutable

const userName = "Atakan";
const surName = "Alkan";

console.log(userName + " " + surName); // output : Atakan Alkan
const array = ["Atakan", "Alkna", "123"];
array[1] = "Alkan"; //You can change the elements of a constant array:
console.log(array);
// But you can NOT reassign the array : array=["Atakan", "Alkan", "12133"]

// Not recommended
var a = 5;
var a = 6;
console.log(a); // output : 6
// A variable with the same name can be defined more than once.
// This usage creates many problems
// Variables declared with the var keyword can NOT have block scope.
