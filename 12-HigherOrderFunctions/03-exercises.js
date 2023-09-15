const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const newCountries = countries.map((country) => country.toUpperCase());
const filterCountries = newCountries.filter(
  (country) => country.includes("LAND") === false
);

const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const newProducts = products.filter(
  (product) => typeof product.price === "number"
);

const concatenatedCountries = countries.reduce(
  (accumulator, currentCountry, index, array) => {
    if (index === array.length - 1) {
      return `${accumulator} and ${currentCountry} are north European countries`;
    } else {
      console.log("acc:", accumulator);
      console.log("curr:", currentCountry);
      return `${accumulator}, ${currentCountry}`;
    }
  },
  "Estonia"
);

console.log(concatenatedCountries);
