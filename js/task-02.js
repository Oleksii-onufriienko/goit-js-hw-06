const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const refIngredients = document.querySelector("ul#ingredients");
const itemsRefArray = [];

ingredients.forEach((element) => {
  const refItem = document.createElement("li");
  refItem.classList.add("item");
  refItem.textContent = element;
  itemsRefArray.push(refItem);
});

refIngredients.append(...itemsRefArray);
