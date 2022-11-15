const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsItem = document.querySelector("#ingredients");

const makeElement = (ingredient => {
const element = document.createElement("li");
element.classList.add("item")
element.textContent = ingredient;
return element;
});

const elements = ingredients.map(makeElement);
ingredientsItem.append(...elements);