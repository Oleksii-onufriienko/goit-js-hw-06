const refInput = document.querySelector("#name-input");
const refOutput = document.querySelector("#name-output");

console.log(refInput);
console.log(refOutput);

refInput.addEventListener("input", (event) => {
  refOutput.textContent = event.currentTarget.value;
});
