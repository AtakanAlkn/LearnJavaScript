const products = JSON.parse(localStorage.getItem("Product"))
  ? JSON.parse(localStorage.getItem("Product"))
  : [];

const saveLocal = () => {
  localStorage.setItem("Product", JSON.stringify(products));
};

const onAdd = (item) => {
  let keyArray = [];
  if (products.length === 0) {
    products.push(item);
    saveLocal();
  } else {
    for (const key of products) {
      keyArray.push(key.name);
    }
    if (keyArray.includes(item.name)) {
      for (const key of products) {
        if (key.name === item.name) {
          key.amount += 1;
          saveLocal();
        }
      }
    } else {
      products.push(item);
      saveLocal();
    }
  }
};

const onRemove = (item) => {
  for (const key of products) {
    if (key.name === item) {
      const index = products.indexOf(key);
      products.splice(index, 1);
    }
  }
  saveLocal();
};

onRemove("TV");
onAdd({ name: "Samsung", price: 12, amount: 1 });
console.log(products);
