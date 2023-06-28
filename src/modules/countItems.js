import { pokeApi } from './apiLinks.js';

const countItems = (item) => {
  const total = document.querySelector('.itemsCount');
  total.innerHTML = `(${item})`;
};

const testCount = async () => {
  const data = await fetch(pokeApi);
  const json = await data.json();
  return json;
};

export { countItems, testCount };