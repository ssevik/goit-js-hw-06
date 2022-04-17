const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInput);

function onInput(event) {
  if (event.target.value.length === +event.target.dataset.length) {
    input.className = 'valid'
  } else {
    input.className = 'invalid'
  }
}