//setInterval
const interval = setInterval(() => console.log("Atakan"), 1000);

//setTimeOut
setTimeout(() => console.log("Atakan"), 2000);

setTimeout(() => {
  clearInterval(interval);
  console.log("Clear setInterval");
}, 5000);

//clearTimeout()
