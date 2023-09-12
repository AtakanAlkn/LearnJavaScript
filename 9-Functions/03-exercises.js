const fullName = (firstName, lastName) => {
  console.log(`Full Name : ${firstName} ${lastName}`);
};

fullName("Atakan", "Alkan");

const addNumber = (a, b) => {
  return `Sum: ${a + b}`;
};
console.log(addNumber(5, 12));

const areaOfReactangle = (length, width) => {
  return `Area of Rectangle: ${2 * (length + width)}`;
};
console.log(areaOfReactangle(5, 8));

const checkSeason = (month) => {
  if (month <= 0 || month > 12) {
    console.log("Please enter a valid number");
  } else {
    if (month === 12 || month === 1 || month === 2) {
      console.log("Winter");
    }
    if (month === 3 || month === 4 || month === 5) {
      console.log("Spring");
    }
    if (month === 7 || month === 8 || month === 6) {
      console.log("Summer");
    }
    if (month === 9 || month === 10 || month === 11) {
      console.log("Fall");
    }
  }
};

checkSeason(8);

const findMax = (a, b, c) => {
  if (a > b && a > c) {
    console.log("max :", a);
  }
  if (b > a && b > c) {
    console.log("max :", b);
  }
  if (c > a && c > b) {
    console.log("max :", c);
  }
};
findMax(-3, 0, -5);

function printArray(a) {
  a.forEach((item) => console.log(item * 2));
  console.log(a);
}

printArray([8, 7, 6, 7, 8, 9]);

const reverseArray = (a) => {
  const b = [];
  for (let i = a.length - 1; i >= 0; i--) {
    b.push(a[i]);
  }
  return b;
};

console.log(reverseArray([2, 4, 6, 8, 10]));

const addItem = (a) => {
  let sum = 0;
  for (let i = 1; i <= a; i++) {
    sum += i;
  }
  return sum;
};

console.log(addItem(6));

const sevenRandomNumbers = () => {
  const numberArray = [];
  for (let i = 0; i < 7; i++) {
    let random = Math.floor(Math.random() * 10);
    if (numberArray.includes(random)) {
      i--;
    } else {
      numberArray.push(random);
    }
  }
  return numberArray;
};

console.log(sevenRandomNumbers());
