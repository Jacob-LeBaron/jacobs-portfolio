import { pokedex } from '../Pokemon-DB-master/pokedex.js'

var card = document.querySelector('.card');
card.addEventListener( 'mouseover', function() {
  card.classList.toggle('is-flipped');
});

card.addEventListener('click', function() {
  card.classList.toggle('flipped')
});