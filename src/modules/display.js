import { getPokemonData, getPokemonLikes, postPokemonLikes } from './apiOerations.js';
import { likesAPi } from './apiLinks.js';
import { countItems } from './countItems.js';

const container = document.querySelector('.pokemons-container');

const getPokemon = async (res) => {
  // get the likes of the items before add more likes
  const likes = await getPokemonLikes();

  const pokemonCards = await Promise.all(res.map(async (item) => {
    const result = await fetch(item.url);
    const pokemon = await result.json();
    return pokemon;
  }));


  const ordered = pokemonCards.slice(1, 15).sort((a, b) => (a.id > b.id ? 1 : -1));
  // count all Items
  countItems(ordered.length);
  pokemonCards.forEach((pokemon) => {
    const likeIndex = likes.findIndex((like) => {
      const itemId = like.item_id;
      if (typeof itemId === 'string') {
      // The item_id is a string
        return Number(like.item_id) === pokemon.id;
      }
      // Ignore or handle the item differently
      return false;
    });

    let likeCount;
    if (likeIndex >= 0) {
      likeCount = likes[likeIndex].likes;
    } else {
      likeCount = 0;
    }

    const card = `<div class="card-wrapper" id='${pokemon.id}'>
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name} image">
        <div class="pokemon-title"> <h3>${pokemon.name}</h3> <i class="fa-regular fa-heart likeBtn" id="${pokemon.id}"></i></i>
        </div>

        <div class="btn">
          <button type="button" class="comment-btn">Comment</button>
            <div class="likes-contain"><h4 class="itemLikes">${likeCount}</h4><p>likes</p>
            </div>
      </div>`;
    container.innerHTML += card;

    // add feature like functionality
    const likeBtns = document.querySelectorAll('.likeBtn');
    const likeCountNums = document.querySelectorAll('.itemLikes');

    likeBtns.forEach((btn, index) => {
      btn.addEventListener('click', async (e) => {
        await postPokemonLikes(likesAPi, e.target.id);
        let likeCount = Number(likeCountNums[index].textContent);
        likeCount += 1;
        likeCountNums[index].textContent = likeCount.toString();
      });
    });
  });
};

const displayPokemons = async () => {
  const data = await getPokemonData();
  getPokemon(data.results);
};

export default displayPokemons;