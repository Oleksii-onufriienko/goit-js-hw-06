const refForm = document.querySelector(".login-form");

refForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены!");
    return;
  }
  const dataForm = {
    email: email.value,
    password: password.value,
  };
  console.log(dataForm);
  refForm.reset();
});
