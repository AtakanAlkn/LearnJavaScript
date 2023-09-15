//empty set
const emptySet = new Set();

//0 to 10
for (let i = 0; i < 10; i++) {
  emptySet.add(i);
}

emptySet.delete(9);

const str = "ATKNL";
const strArr = str.split("");
const strSet = new Set();

for (let i = 0; i < 5; i++) {
  strSet.add(strArr[i]);
}

const countries = ["Finland", "Sweden", "Norway"];

const countriesMap = new Map();

countries.map((country) => {
  let length = country.length;
  if (!countriesMap.has(length)) {
    countriesMap.set(length, []);
  }
  countriesMap.get(length).push(country);
});

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

//Union
const newArr = [...new Set([...a, ...b])].sort((a, b) => a - b);
console.log("Union a and b: ", newArr);

//Intersection
const A = [...new Set(a)];
const B = [...new Set(b)];
console.log(A.filter((number) => B.includes(number)));
