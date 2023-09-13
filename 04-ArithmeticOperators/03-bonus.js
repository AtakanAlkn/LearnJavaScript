const currentDate = new Date();
const daysArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday ",
  " Saturday",
];

const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const text =
  currentDate.getDate() +
  " " +
  monthArray[currentDate.getMonth()] +
  " " +
  currentDate.getFullYear() +
  " " +
  daysArray[currentDate.getDay()] +
  " " +
  currentDate.getHours() +
  ":" +
  currentDate.getMinutes();
console.log(text);
