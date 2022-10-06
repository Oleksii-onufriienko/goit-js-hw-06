const refInput = document.querySelector("input#font-size-control");
const refText = document.querySelector("span#text");

refInput.addEventListener("input", (event) => {
  refText.style.fontSize = `${event.currentTarget.value}px`;
  return;
});
