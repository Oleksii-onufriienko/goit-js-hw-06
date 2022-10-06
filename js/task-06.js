const refInput = document.querySelector("#validation-input");
const lengthStr = refInput.dataset.length;

refInput.addEventListener("input", (event) => {
  if (event.currentTarget.value.length - lengthStr === 0) {
    refInput.classList.remove("invalid");
    refInput.classList.add("valid");
    return;
  }
  refInput.classList.remove("valid");
  refInput.classList.add("invalid");
  return;
});
