{
  const emptyArray = [1, 2, 3, 4, 5, 6];
  const emptyArrayLength = emptyArray.length;
  const firstItem = emptyArray[0];
  const middleItem = emptyArray[emptyArrayLength / 2 - 1];
  const lastItem = emptyArray[emptyArrayLength - 1];
}

{
  const mixedDataTypes = ["Atakan", 12, 23, "Alkan", "Computer", 2];
  const mixedDataLength = mixedDataTypes.length;
}

{
  const itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
  ];

  const companiesNumber = itCompanies.length;
  const first = itCompanies[0];
  const a = Math.floor(companiesNumber / 2);
  const middle = itCompanies[a];
  const last = itCompanies[companiesNumber - 1];
  itCompanies.map((company) => console.log(company));
  itCompanies.map((company) => console.log(company.toUpperCase()));

  const oracleIndex = itCompanies.indexOf("Oracle");
  const amazonIndex = itCompanies.indexOf("Amazon");
  const newCompanies = itCompanies.slice(0, oracleIndex + 1);

  console.log(
    newCompanies.join(","),
    "and",
    itCompanies[amazonIndex],
    "are big IT companies."
  );

  itCompanies.includes("Amazon")
    ? console.log("Amazon")
    : console.log(" company is not found");

  itCompanies.map((company) =>
    company.toLowerCase().split("o").length - 1 == 2
      ? console.log(company)
      : null
  );

  const sortedCompanies = itCompanies.sort();
  const reversedCompanies = itCompanies.reverse();

  const asd = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
  ];

  console.log(asd.slice(0, 3));
  console.log(asd.slice(-3));

  asd.shift();
  console.log(asd);

  asd.pop();
  console.log(asd);

  asd.splice(0, asd.length);
  console.log(asd);
}

{
  const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

  const teaIndex = shoppingCart.indexOf("Tea");

  if (teaIndex !== -1) {
    shoppingCart[teaIndex] = "Green Tea";
  }

  console.log(shoppingCart);
}

{
  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
  const sortedAges = ages.sort();
  console.log("min:", sortedAges[0]);
  console.log("max:", sortedAges[sortedAges.length - 1]);

  if (sortedAges.length % 2 === 0) {
    const median =
      sortedAges[sortedAges.length / 2] + sortedAges[sortedAges.length / 2 - 1];
    console.log("median:", median);
  } else {
    const median = Math.floor(sortedAges.length / 2);
    console.log("median:", median);
  }
  let a = 0;
  ages.map((age) => (a = a + age));
  const average = a / ages.length;
  console.log(average);
}
