function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector(".change-color");
const text = document.querySelector(".color");

button.addEventListener ("click", onChangeColor);

function onChangeColor(event) {
	const color = getRandomHexColor()
	text.textContent=color;
	text.style.backgroundColor = color;
}