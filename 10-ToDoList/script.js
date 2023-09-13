const inputElement = document.querySelector("#input");
const listDOM = document.querySelector("#list");
const todoArray = [];

// Enter button
document.querySelector("#enter").addEventListener("click", () => {
  const inputValue = inputElement.value;
  if (inputValue.trim() !== "") {
    todoArray.push(inputValue);
    const li = document.createElement("li");
    li.innerHTML = inputValue;
    listDOM.appendChild(li);
    inputElement.value = ""; // Clear ınput
    addClickListener(li);
  }
});

function addClickListener(li) {
  li.addEventListener("click", () => {
    const clickedValue = li.textContent;
    const index = todoArray.indexOf(clickedValue);
    if (index !== -1) {
      todoArray.splice(index, 1);
      li.remove();
    }
  });
}
