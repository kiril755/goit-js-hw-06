const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email
  const password = event.currentTarget.elements.password

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  } else {
    const values = {
      [email.name]: email.value,
      [password.name]: password.value
    }
    console.log(values);
  }

  event.currentTarget.reset();
}