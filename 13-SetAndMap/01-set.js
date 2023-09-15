const names = new Set(); // unique elements
names.add("JS");
names.add("Python");
names.add("JS");
console.log(names);

const numbers = new Set([1, 2, 3, 4, 3, 4, 5, 5, 6, 2]);
console.log(numbers);

//length
console.log(numbers.size);

//delete
numbers.delete(3);
console.log(numbers);

//checking
console.log(numbers.has(2));

//its remove all the elements from a set
numbers.clear();
console.log(numbers);

const numbersArray = [1, 2, 3, 4, 2, 3, 5, 6, 1, 2, 8, 1, 10, 22, 1, 22];
console.log("Original numbersArray:", numbersArray);
const numbersArray2 = [...new Set(numbersArray)];
console.log(numbersArray2);

//Union of set
const a = [1, 2, 3, 4];
const b = [2, 3, 4, 5, 6];
console.log([...new Set([...a, ...b])]);

//Intersection of set
console.log(a.filter((num) => new Set(b).has(num)));

//Difference of sets
// a/b or a-b
console.log(a.filter((num) => new Set(b).has(num) === false));
