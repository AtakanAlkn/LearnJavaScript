let a = 1; // is a global scope
let b = "JavaScript"; // is a global scope

const tryFunction = () => {
  console.log("Global Scope: ", a, b); // 1 JavaScript
  if (true) {
    let a = 2;
    let b = "React Native";
    let c = "Access";
    console.log("Block Scope: ", a, b); // 2 React Native
    console.log("Block Scope c:", c);
  }
  console.log("Global Scope ", a, b); // 1 JavaScript
  // console.log("Global Scope c:", c); // c cannot be accessed because c is not defined in this scope
};

tryFunction();

// var keyword is function scope
const varFunc = () => {
  var string = "Java";
  console.log(string);
};
varFunc();
// console.log(string);

{
  var number = 5;
  console.log(number); // but is not block scope
}
console.log(number);
