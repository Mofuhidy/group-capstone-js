import getPokemonData from './apiOerations.js';

const container = document.querySelector('.pokemons-container');

const getPokemon = async (result) => {
  const slicedResult = result.slice(0, 9);
  slicedResult.map(async (item) => {
    const result = await fetch(item.url);
    const pokemon = await result.json();

    const card = `<div class="card-wrapper" data-id='${pokemon.id}'>
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="">
        <div class="pokemon-title"> <h3>${pokemon.name}</h3> <i class="fa-regular fa-heart"></i></i>
        </div>
            <div class="likes-contain"><p>likes</p></div>
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