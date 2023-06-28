import { pokeApi, likesAPi } from './apiLinks.js';

const getPokemonData = async () => {
  const data = await fetch(pokeApi);
  const jsonData = data.json();
  return jsonData;
};

const getPokemonLikes = async () => {
  const data = await fetch(likesAPi);
  const jsonData = data.json();
  return jsonData;
};

const postPokemonLikes = async (url, id) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }), // body data type must match "Content-Type" header
  });
};

// post comment
const postPokemonComment = async (url, id, username, comment) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id, username, comment }),
    // body data type must match "Content-Type" header
  });
  return res;
};

export {
  getPokemonData, postPokemonLikes, getPokemonLikes, postPokemonComment,
};