const text = prompt("Please enter a number between 0 and 100");
const h1Element = document.querySelector("#number");

switch (true) {
  case text < 0:
    h1Element.textContent = "You entered the wrong number";
    break;
  case text >= 0 && text < 20:
    h1Element.textContent = "FF";
    h1Element.classList.add("unsuccessful");
    break;
  case text >= 20 && text < 40:
    h1Element.textContent = "DD";
    h1Element.classList.add("unsuccessful");
    break;
  case text >= 40 && text < 60:
    h1Element.textContent = "CC";
    h1Element.classList.add("unsuccessful");
    break;
  case text >= 60 && text < 80:
    h1Element.textContent = "BB";
    h1Element.classList.add("successful");
    break;
  case text >= 80 && text <= 100:
    h1Element.textContent = "AA";
    h1Element.classList.add("successful");
    break;
  default:
    h1Element.textContent = "Error";
}
