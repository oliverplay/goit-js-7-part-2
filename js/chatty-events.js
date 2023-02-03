//  ------------ throttle -------------------

const quantityEl = document.querySelector('.js-quantity');
let mouseMoveCounter = 0;
let throttledOnMouseMove = _.throttle(onMouseMove, 1000);

window.addEventListener('mousemove', throttledOnMouseMove);

function onMouseMove(evt) {
  mouseMoveCounter += 1;

  quantityEl.textContent = `
  onMouseMove calls quantity: ${mouseMoveCounter},
    X: ${evt.clientX},
    Y: ${evt.clientY},
  `;
}

// ------------------ debounce --------------------------

const ref = {
  input: document.querySelector('.js-input'),
  text: document.querySelector('.js-input-quantity'),
};
let inputChangeCounter = 0;
const debouncedOnInputChange = _.debounce(onInputChange, 300);

ref.input.addEventListener('input', debouncedOnInputChange);

function onInputChange(evt) {
  inputChangeCounter += 1;

  ref.text.textContent = `
  onInputChange calls quantity: ${inputChangeCounter}
  value: ${evt.target.value}
  `;
}
