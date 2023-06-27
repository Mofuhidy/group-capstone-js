import './style.css';
import getPokemonData from './modules/apiOerations.js';
import displayPokemons from './modules/display.js';
import modalOperation from './modules/modalOperations.js'

getPokemonData();


window.onload = () => {
    displayPokemons();
    setTimeout( () => {
        modalOperation()
    }, 3000)
}

