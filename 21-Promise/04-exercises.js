const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

/*
fetch(countriesAPI)
  .then((response) => response.json())
  .then((result) => console.log(result.map((item) => item.name)))
  .catch((error) => console.log(error));
*/
const languages = [];
const getFetch = async () => {
  try {
    const response = await fetch(countriesAPI);
    const data = await response.json();
    data.forEach((item) => {
      item.languages.forEach((language) => {
        languages.push(language.iso639_1);
      });
    });
  } catch (error) {
    console.log(error);
  }
};
let newLang = [];
getFetch().then(() => {
  // console.log(new Set(languages)); 113 different languages
  for (const key of languages) {
    if (!newLang.includes(key)) {
      newLang.push(key);
    }
  }
  console.log(newLang.length); //113
});

let catNames = [];

fetch(catsAPI)
  .then((response) => response.json())
  .then((result) => result.map((item) => catNames.push(item.name)))
  .catch((e) => console.log(e.name));

const deneme = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const a = 12;
      resolve(a);
    }, 2000);
  });
};

deneme().then((a) => {
  console.log(a); // "12" yazdır
});
