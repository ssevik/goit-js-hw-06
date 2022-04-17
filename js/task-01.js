const listEl = document.querySelectorAll('#categories li.item');

console.log(`Number of categories: ${listEl.length}`)

const findElemant = (() => {
 return listEl.forEach((element) => {
   console.log(`Category: ${element.querySelector('h2').textContent}`);
   console.log(`Elements: ${element.querySelectorAll('li').length}`)
  });
});

findElemant(listEl);

// const itemEl = listEl.parentNode;

// console.log(itemEl)

// console.log(listEl)

// console.log(listEl.children[1])