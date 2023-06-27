import { pokeApi } from './apiLinks.js';

const getPokemonData = async () => {
  const data = await fetch(pokeApi);
  const jsonData = data.json();
  return jsonData;
};

export default getPokemonData;