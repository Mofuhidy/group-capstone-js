import './style.css';
import displayPokemons from './modules/display.js';
import modalOperation from './modules/modalOperations.js'


window.onload = () => {
    displayPokemons();
    setTimeout( () => {
        modalOperation()
    }, 500)
}



