const getSum = (a, b) => {
  return a + b;
};

console.log(getSum(5, 8));

const getSqrt = (r, k) => {
  return r ** k;
};

console.log(getSqrt(5, 3));

//unlimitted  arguments
function newFunc() {
  console.log(arguments);
}

newFunc(3, 5);

//unlimitted functions in arrow function
const newFunc2 = (...rest) => {
  return rest;
};
console.log(newFunc2(5, 8, 12));

//anonymous function
const anoymousFunc = function (userName) {
  return `Hello ${userName}`;
};
console.log(anoymousFunc("Atakan"));

//Self Invoking Functions

(function () {
  console.log("This is a self-invoked function");
})();

//default value
const onPress = (num, isPress = true) => {
  if (isPress) {
    return num * 2;
  } else {
    return num;
  }
};

console.log(onPress(8));
console.log(onPress(8, false));
