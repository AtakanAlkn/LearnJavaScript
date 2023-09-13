//1
/*
{
  console.log("1--------------------");
  for (let i = 1; i <= 7; i++) {
    let square = "";
    for (let j = 1; j <= i; j++) {
      square = square + "#";
    }
    console.log(square);
  }
}

//2
{
  console.log("2--------------------");
  for (let i = 0; i <= 10; i++) {
    console.log(`${i} X ${i} = ${i * i}`);
  }
}

//3
{
  console.log("3--------------------");
  for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i ** 2} ${Math.pow(i, 3)}`);
  }
}

//4 6n-1 or 6n+1
{
  console.log("4--------------------");

  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    if (num === 2) {
      return true;
    }
    if (num % 2 === 0) {
      return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
      console.log(i, "is a prime number");
    }
  }
}

{
  let sum = 0;
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i <= 100; i++) {
    sum += i;
    if (i % 2 === 0) {
      sumEven += i;
    } else if (i % 2 !== 0) {
      sumOdd += i;
    }
  }
  console.log("The sum of all numbers from 0 to 100 is", sum);
  console.log("The sum of all evens from 0 to 100 is ", sumEven);
  console.log("The sum of all odd from 0 to 100 is", sumOdd);
  const numArray = [];
  numArray.push(sumEven, sumOdd);
  console.log(numArray);
}

{
  const randomNumberArrayGenerator = () => {
    const randomNumberArray = [];
    for (let i = 0; i < 5; i++) {
      randomNumberArray.push(Math.floor(Math.random() * 11)); //0-10 random number
    }
    return randomNumberArray;
  };

  console.log(randomNumberArrayGenerator());
}


const randomNumberArrayGenerator = () => {
  const randomNumberArray = [];
  for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 11); //0-10 random number
    if (randomNumberArray.includes(num)) {
      i--;
    } else {
      randomNumberArray.push(num);
    }
  }
  return randomNumberArray;
};

console.log(randomNumberArrayGenerator());



const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";

const randomGenerator = (length) => {
  let randomString = "";
  for (let i = 0; i < length; i++) {
    let num = Math.floor(Math.random() * 36);

    randomString += alphabet[num];
  }
  return randomString;
};

console.log(randomGenerator(20));

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const countryLength = [];
const firstThreeLetters = [];
const totalArray = [];
for (let i = 0; i < countries.length; i++) {
  countries[i] = countries[i].toUpperCase();
  countryLength.push(countries[i].length);
  firstThreeLetters.push(countries[i].slice(0, 3));
  totalArray[i] =
    "[" +
    countries[i] +
    ", " +
    countries[i].slice(0, 3) +
    countryLength[i] +
    "]";
}
console.log(totalArray);


const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
let max = 0;
for (let i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > max) {
    max = webTechs[i].length;
  }
}
console.log(max);


const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
const arr = [];
let newArr = [];
for (let i = 0; i < webTechs.length; i++) {
  newArr.push([webTechs[i], webTechs[i].length]);
}
console.log(newArr);*/
