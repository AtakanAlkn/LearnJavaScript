const URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
}

const getPosts2 = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
