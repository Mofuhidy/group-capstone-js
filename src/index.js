import './style.css';
import getPokemonData from './modules/apiOerations';
import displayPokemons from './modules/display.js';

getPokemonData();

window.onload = displayPokemons();