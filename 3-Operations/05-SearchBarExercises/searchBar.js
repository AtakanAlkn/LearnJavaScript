const array = [5, 8, 9, 12, 1, 25, 60, 7];
const filtredArray = array.filter((number) => number > 11);
console.log(filtredArray);

let text = prompt("Search Product");

const productList = [
  { productName: "Computer", productId: 1 },
  { productName: "Phone", productId: 2 },
  { productName: "Tablet", productId: 3 },
  { productName: "Monitor", productId: 4 },
  { productName: "Keyboard", productId: 5 },
  { productName: "Mouse", productId: 6 },
  { productName: "Headphones", productId: 7 },
  { productName: "Printer", productId: 8 },
];

const filteredProducts = productList.filter((product) =>
  product.productName.toLowerCase().startsWith(text.toLowerCase())
);

filteredProducts.length > 0
  ? filteredProducts.map((product) => document.write(product.productName, " "))
  : document.write("Product Not Found");
