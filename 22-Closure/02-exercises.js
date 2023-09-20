const setCounter = () => {
  let count = 0;
  const increaseCounter = () => {
    count++;
    return count;
  };
  const decreaseCounter = () => {
    count--;
    return count;
  };
  return {
    plusOne: increaseCounter,
    minusOne: decreaseCounter,
  };
};

const setC = setCounter();

console.log(setC.plusOne());
console.log(setC.plusOne());
console.log(setC.plusOne());
console.log(setC.minusOne());
