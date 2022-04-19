const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients')

const аrr = [];

const ingredientsArr = ingredients.map (ingredient => {
  const elemArr = document.createElement('li');
  elemArr.classList.add('item');
  elemArr.textContent = ingredient;
  аrr.push(elemArr);
});

listEl.append(...аrr);



// ingredients.forEach(ingredient => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item');
//   itemEl.textContent = ingredient;

//   listEl.appendChild(itemEl);
// })