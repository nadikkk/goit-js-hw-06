const input = document.querySelector("#name-input");
const nameUser = document.querySelector("#name-output");

input.addEventListener("input", onInputName);

function onInputName(event) {
	event.currentTarget.value===""? nameUser.textContent="Anonymous":nameUser.textContent=event.currentTarget.value;}
	
