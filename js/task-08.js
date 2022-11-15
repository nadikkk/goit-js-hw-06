const form = document.querySelector(".login-form");

form.addEventListener ("submit", onSubmitForm);

function onSubmitForm(event) {
	event.preventDefault();
	const {email, password} = event.currentTarget.elements;
	const contactsUser = {
		email: email.value,
		password: password.value,
	}

	if (email.value === "" || password.value === "") {
		return alert("Bсі поля повинні бути заповнені!");}
		console.log(contactsUser);
  event.currentTarget.reset();
};

