function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  Input: document.querySelector("input[type=number]"),
  Create: document.querySelector("button[data-create]"),
  Destroy: document.querySelector("button[data-destroy]"),
};

console.log(ref);

ref.Create.addEventListener("click", () => {
  createBoxes(ref.Input.value);
});

function createBoxes(amount) {
  console.log(amount);
}
