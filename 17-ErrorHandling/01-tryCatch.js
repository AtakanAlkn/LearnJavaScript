// try ...catch()

let sum;
try {
  let a = 5;
  let b = 10;
  // sum = a + b; //output:15
  sum = a + c;
} catch (err) {
  console.log(err.message);
  console.log(err.name);
}

const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Divisor cannot be 0");
  }
  if (b < 0) {
    throw new Error("Divisor cannot be less than 0");
  }
  const result = a / b;
  return result;
};
try {
  console.log(divide(10, 12));
} catch (e) {
  console.log(e.message);
}

const customFunc = (str) => {
  if (str) {
    console.log(str);
  }
  throw new Error("str is undefined ");
};

try {
  customFunc();
} catch (err) {
  console.log(err.message);
}

let x = 0;
//ReferenceError: z is not defined
// let y = x + z;

//SyntaxError
// console.log(5 x 5)

//TypeError
// console.log(x.toUpperCase());
