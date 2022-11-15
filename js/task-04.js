const addBtn = document.querySelector('button[data-action="increment"]');
const removeBtn = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector("#value");
let counterValue = 0;

addBtn.addEventListener("click", onClickAddValue);

removeBtn.addEventListener("click", onClickRemoveValue);

function onClickAddValue(event) {
	counterValue+=1;
	value.textContent= counterValue;
	};

function onClickRemoveValue(event) {
	counterValue= counterValue-1;
	value.textContent= counterValue;
	};
	