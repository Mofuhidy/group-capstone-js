import { pokeApi, likesAPi, comments } from './apiLinks.js';

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

const getPokemonComments = async () => {
  const data = await fetch(comments);
  const jsonData = data.json();
  return jsonData;
};

// post comment
const postPokemonComment = async (url, id, username, comment) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id, username, comment }), // body data type must match "Content-Type" header
  });
};

export {
  getPokemonData, postPokemonLikes, getPokemonLikes, postPokemonComment, getPokemonComments,
};