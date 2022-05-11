const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const elements = ingredients.map(option => {
  const createLi = document.createElement("li")
  createLi.classList.add("item")
  createLi.textContent = option;
  return createLi;
})


ingredientsList.append(...elements);
