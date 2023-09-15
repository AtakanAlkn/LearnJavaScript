/*
const a = (numbersber1) => {
  const b = (numbersber2) => {
    const c = (numbersber3) => {
      return numbersber1 + numbersber3 + numbersber2;
    };
    return c;
  };
  return b;
};

console.log(a(52)(2)(85));

const arr = [1, 2, 3, 4];
console.log(arr.map((item) => item + 2));
arr.forEach((item) => console.log(item - 1));
console.log(arr);
let total = 0;
arr.map((item) => (total += item));
console.log(total);

*/

const Array = [
  {
    id: 1,
    name: "Atakan",
    points: 40,
  },
  {
    id: 2,
    name: "Tadic",
    points: 10,
  },
  {
    id: 3,
    name: "Dzeko",
    points: 9,
  },
  {
    id: 4,
    name: "Ali",
    points: 80,
  },
];

const atakanFunc = (arr, n) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id < n) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

// console.log(atakanFunc(Array, 3));

// console.log(Array.filter((Object) => Object.id < 4));

//filter
// console.log(Array.filter((item) => item.id < 4));

//reduce
const numbers = [10, 20, 30, 40, 50, +"60"];
const initialValue = 0;
console.log(numbers.reduce((acc, cur) => (acc += cur), initialValue));
//initialvalue is optional but if the array is empty it prevents the error and returns 0 value

//every: Check if all the elements are similar in one aspect. It returns boolean
console.log(numbers.every((num) => typeof num === "numbersber")); //are all numbersber

//some: Check if some of the elements are similar in one aspect. It returns boolean
console.log(numbers.some((num) => typeof num === "string")); //are all numbersber

//find: Return the first element which satisfies the condition
console.log(
  "find:",
  numbers.find((num) => num > 20)
);

//findIndex: Return the position of the first element which satisfies the condition
console.log(Array.findIndex((object) => object.id === 2));

//sort: The sort methods arranges the array elements either ascending or descending order.
//By default, the sort() method sorts values as strings.
//This works well for string array items but not for numbers.
//If number values are sorted as strings and it give us wrong result.
//Sort method modify the original array.
//It is recommended to copy the original data before you start using sort method.

const nameArray = [
  "ReactNative",
  "JavaScript",
  "MongoDB",
  "NodeJs",
  "ExpressJs",
];

const newNumbers = [20, 2, 10, 5, 6, 10, 50];
console.log(nameArray.sort());
console.log(nameArray.sort().reverse());
console.log(nameArray.sort((a, b) => b.localeCompare(a)));
console.log(newNumbers.sort((a, b) => b - a)); //Descending

const Array2 = Array.map((object) => {
  return {
    ...object, // All properties of the current object are copied first
    name: object.name + object.points, //change name
  };
});

console.log(Array2);
