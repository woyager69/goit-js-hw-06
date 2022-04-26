const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elements = ingredients.map(ingredient => {
    const liEl = document.createElement('li');
    liEl.classList.add('item');
    liEl.textContent = ingredient;
    return liEl;
});
const listEL = document.querySelector('ul#ingredients');
listEL.append(...elements);
