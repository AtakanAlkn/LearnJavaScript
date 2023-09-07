//String
let carName = "Volvo";
let country = `Turkey`;
console.log("Istanbul");
console.log(country);

//Number
let a = 5;
b = 5.12;
c = -13.8;
console.log(c);

//Boolean
//A boolean data type is either a true or false value.
console.log(true); //if the light is on, the value is true
console.log(false); //if the light is off, the value is false

//Undefined
let nickName;
console.log(nickName); //output: undefined

//Null
//Null in JavaScript means an empty value.
let value = null;

//Checking Data Types
console.log(typeof "a");
console.log(typeof carName);
console.log(typeof c);
console.log(typeof nickName);
console.log(typeof value);

let k = "Atakan";
let l = "Atakan";
console.log("true or false : ", k == l);

let array2 = [1, 2, 3];
let array3 = [1, 2, 3];
console.log("array true or false: ", array2 == array3);
// Arrays are checked their reference

let array4 = array2;
console.log("array4 true or false : ", array2 == array4);
//output: true

const originalObject = {
  name: "John",
  age: 30,
};

const copiedObject = originalObject;
originalObject.name = "Alice";
console.log("originalObejct.name: " + originalObject.name);
console.log("copiedObject.name: " + copiedObject.name); // "Alice"

const copiedObject2 = { ...originalObject };
originalObject.age = 40;
console.log(copiedObject2);
