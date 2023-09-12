for (let i = 1; i <= 10; i++) {
  console.log(i);
}

const names = ["Dusan Tadic", "Edin Dzeko", "Livakovic", "Fred"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//for of loop : we use "for of loops" for arrays

const numbers = [5, 4, 3, 2, 1, 0];
for (const num of numbers) {
  console.log(num);
}

//break : break is use to interrupt a loop
for (let i = 0; i < names.length; i++) {
  if (names[i] === "Edin Dzeko") {
    console.log("Name is found", names[i]);
    break;
  }
  console.log(names[i]);
}

//continue
for (let i = 0; i < names.length; i++) {
  if (names[i] === "Edin Dzeko") {
    continue;
  }
  console.log(names[i]);
}
