import './style.css';

import { getPokemonData } from './modules/apiOerations.js';
import displayPokemons from './modules/display.js';

getPokemonData();

window.onload = displayPokemons();
