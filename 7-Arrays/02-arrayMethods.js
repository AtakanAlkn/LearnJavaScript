const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//fill()
const arr = Array(5);
console.log(arr.fill("Example"));

//concat
let temporary = arr.concat(array, [22, 24, 26], "Atakan");
console.log(temporary);

//Recommended , spread operator
let newArray = [...arr, ...array];
console.log(newArray);

//Example spread operator using
const numbers = [1, 2, 3, 4, 5, 7, 8, 9];
const [first, second, third, a, ...rest] = numbers; //destructuring
console.log(second); // Result: 2
console.log(rest); // Result: [5,7,8,9]

//indexOf
console.log(array.indexOf(8)); //output : 7

//inclludes
console.log(array.includes(0)); // output  : false

//Array.isArray()
console.log(Array.isArray(temporary)); //output : true
console.log(Array.isArray("Atakan")); // false

//toString()
console.log(array.toString());

//join()
const userName = ["Atakan", "Alkan", "John", "Stones"];
console.log(userName.join()); //,
console.log(typeof userName.join(" ")); // " "

//slice()
console.log(array.slice(0, array.length / 2));

//splice()
console.log(array.splice(0, 3, "a", "b", "c"));
console.log(array);

//push()
array.push(11, 12);
console.log(array);

//pop()
let lastItem = array.pop();
console.log(lastItem);
console.log(array);

//shift()
array.shift();
console.log(array);

//unshift()
array.unshift("A");
console.log(array);

//reverse()
console.log(array.reverse());

//Example
console.log("ATAKAN".split("").reverse().join(""));

//Sorting elements in array
const array2 = ["asad", "basd", "dasd", "wqqeq", "asd", "tewrw"];
array2.sort();
console.log(array2);
