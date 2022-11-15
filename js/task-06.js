const input = document.querySelector ("#validation-input");
input.addEventListener("blur", isValidInput);

function isValidInput(event) {
	event.currentTarget.value.length === Number(input.dataset.length)? input.style.borderColor = "#4caf50" : input.style.borderColor = "#f44336";
}
