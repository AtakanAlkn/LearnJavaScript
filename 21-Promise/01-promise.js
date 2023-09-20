// syntax
const promise = new Promise((resolve, reject) => {
  resolve("Success");
  reject("Failure");
});

// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.length > 6) {
      resolve(skills);
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});

doPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));