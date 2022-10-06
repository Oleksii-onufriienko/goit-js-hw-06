function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refButton = document.querySelector(".widget button.change-color");
const refBody = document.querySelector("body");
const refSpan = document.querySelector(".widget span.color");

refButton.addEventListener("click", () => {
  const tmpColor = getRandomHexColor();
  refBody.style.backgroundColor = tmpColor;
  refSpan.textContent = tmpColor;
});
