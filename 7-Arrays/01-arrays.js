//Empty Arrays
const arr = Array();
console.log(arr);

const arr2 = [];
console.log(arr2);
console.log(typeof arr2);

// difference between Array() and []
const arr3 = Array(5); // we can determine the length of the empty array

// Creating an array with a value
const array = ["Atakan", "2", 28, 2000];
console.log(array, "Array Length:", array.length);

//Objects can be written inside the array
const newArray = [
  "Atakan",

  {
    id: 1,
    userName: "Atakan",
    age: 23,
  },
  28,
  "How",
];
console.log(newArray[1].id);

//Creating an array using split()
let letCode = "JavaScript";
const codeArray = letCode.split("");
console.log(codeArray);

//Modifying Array Element
newArray[0] = "Alkan";
console.log(newArray);
