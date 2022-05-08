function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const button = document.querySelector(".change-color")
const colorName = document.querySelector(".color")

button.addEventListener("mouseup", event => {
  body.style.backgroundColor = getRandomHexColor()
  colorName.innerHTML = `${getRandomHexColor()}`
});

