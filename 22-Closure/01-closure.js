const outerFunction = () => {
  let count = 0;
  const innerFunction = () => {
    count++;
    return count;
  };
  return innerFunction;
};
const innerFunc = outerFunction();
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());
