let counterValue = 0;

const refButtonDeсrement = document.querySelector(
  'button[data-action="decrement"]'
);
const refButtonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const refValue = document.querySelector("#value");

refButtonDeсrement.addEventListener("click", (event) => {
  counterValue -= 1;
  refValue.textContent = counterValue;
  return;
});

refButtonIncrement.addEventListener("click", (event) => {
  counterValue += 1;
  refValue.textContent = counterValue;
  return;
});
