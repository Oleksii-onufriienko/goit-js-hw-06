const countItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${countItem.length}`);

for (const element of countItem) {
  console.log(``);
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
}
