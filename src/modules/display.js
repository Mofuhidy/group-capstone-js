import { getPokemonData, getPokemonLikes } from './apiOerations.js';

const container = document.querySelector('.pokemons-container');

const getPokemon = async (result) => {
  // get the likes of the items before add more likes
  const likes = await getPokemonLikes();
  const slicedResult = result.slice(0, 9);
  slicedResult.map(async (item, index) => {
    const result = await fetch(item.url);
    const pokemon = await result.json();
    const likeIndex = likes.findIndex((like) => Number(like.item_id) === index);
    let likeCount;
    if (likeIndex >= 0) {
      likeCount = likes[likeIndex].likes;
    } else {
      likeCount = 0;
    }
    const card = `<div class="card-wrapper" id='${index}'>
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="">
        <div class="pokemon-title"> <h3>${pokemon.name}</h3> <i class="fa-regular fa-heart likeBtn" id="${index}"></i></i>
        </div>
            <div class="likes-contain"><h4 class="itemLikes">${likeCount}</h4><p>likes</p></div>
        <div>
          <button type="button" class="btn">Comment</button>
        </div>
      </div>`;
    container.innerHTML += card;
  });
};

const displayPokemons = async () => {
  const data = await getPokemonData();
  getPokemon(data.results);
};

export default displayPokemons;