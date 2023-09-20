const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
