import getPokemonData from './apiOerations.js';

const container = document.querySelector('.pokemons-container');

const displayPokemons = async () => {
  const data = await getPokemonData();
  document.getElementsByClassName

  data.results.forEach((pokemon) => {
    const card = `<div class="card-wrapper">
        <img src="../assets/pngegg.png" alt="">
        <div class="pokemon-title"> ${pokemon.name} <i class="fa-regular fa-heart"></i>
        </div>
        <div class="btn">
          <button type="button">Comment</button>
        </div>
      </div>`;
    container.innerHTML += card;
  });
};

export default displayPokemons;