function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  Input: document.querySelector("input[type=number]"),
  Create: document.querySelector("button[data-create]"),
  Destroy: document.querySelector("button[data-destroy]"),
};

ref.Create.addEventListener("click", () => createBoxes(ref.Input.value));
ref.Destroy.addEventListener("click", () => destroyBoxes());

function createBoxes(amount) {
  const arrayElements = [];

  for (let i = 30; i < 30 + amount * 10; i += 10) {
    let refDiv = document.createElement("div");
    refDiv.style.width = `${i}px`;
    refDiv.style.height = `${i}px`;
    refDiv.style.backgroundColor = getRandomHexColor();
    arrayElements.push(refDiv);
  }
  document.querySelector("#boxes").append(...arrayElements);
  return;
}

function destroyBoxes() {
  document.querySelector("#boxes").innerHTML = "";
  return;
}
