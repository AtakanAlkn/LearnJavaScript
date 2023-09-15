const nums = [1, 2, 3, 4, 5];
const names = ["Atakan", "Ali", "Veli"];

//Copy array
const nums2 = [...nums];
console.log("Coppy nums:", nums2);

//Union and copy
const union = [...nums, ...names];
console.log("nums+names: ", union);

//res
const [num1, , num3, ...res] = nums;
console.log(res); // [4,5]

const users = {
  name: "Atakan",
  surName: "Alkan",
  age: 22,
};

const newUsers = { ...users, name: "Hasan" };
console.log(newUsers);
