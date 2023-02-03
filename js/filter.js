const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'SASS' },
  { label: 'JavaScript' },
  { label: 'React' },
  { label: 'Next' },
  { label: 'Angular' },
  { label: 'Vue' },
  { label: 'Redux' },
  { label: 'Mobx' },
  { label: 'Node' },
  { label: 'Nest' },
  { label: 'SQL' },
  { label: 'GraphQL' },
];

//--------------------- steps --------------------------
/*
 * 1. render a list of elements
 * 2. Add listener
 * 3. filter data and render new elements
 */

const refs = {
  input: document.querySelector('.js-filter'),
  list: document.querySelector('.js-list'),
};

refs.input.addEventListener('input', _.debounce(onInputChange, 250));

const listMarkup = createListMarkup(tech);

populateList(listMarkup);

function createListMarkup(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}

function onInputChange(evt) {
  const filter = evt.target.value.toLowerCase();
  const filteredTech = tech.filter(item => item.label.toLowerCase().includes(filter));
  const listMarkup = createListMarkup(filteredTech);
  populateList(listMarkup);
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}
