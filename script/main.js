import { pokedex } from '../Pokemon-DB-master/pokemon.js'

console.log(pokedex)

const pokeContainer = document.querySelector('#container')

const pokeCards = (poke) => {
    console.log(`${poke.id}${poke.ename}.png`)
    let card = document.createElement('div')
    let fig = document.createElement('figure')
    let img = document.createElement('img')
    let cap = document.createElement('figcaption')
    let backimg = document.createElement('img')
    let backcard = document.createElement('div')
    let backimg = document.createElement('img')
    let stats = document.createElement('ul')

    let attack = document.createElement('li')
    let defense = document.createElement('li')
    let health = document.createElement('li')

    card.className = 'card'
    fig.className = 'front'
    img.className = 'pokemon'
    cap.className = 'pokemonname'
    backimg.className = 'background'
    backcard.className = 'back'
    stats.className = 'stats'
    
    card.addEventListener( 'mouseover', function() {
        card.classList.toggle('is-flipped')
    });

    attack.textContent = `(${poke.stats["Atk"]})`
    defense.textContent = `(${poke.stats["Def"]})`
    health.textContent = `(${poke.stats["HP"]})`
    cap.textContent = poke.ename
    img.src = `../Pokemon-dex/img/${poke.id}${poke.ename}.png`
    backimg.src = `../Pokemon-dex/spr/${poke.id}${poke.ename}.png`
    if(poke.id < '001') {
        img.src=`../Pokemon-dex/spr/100MS.png`
    }

    pokemon.forEach(element => cardCreator(element))


    let createCard = document.querySelector('#createCard')
    createCard.addEventListener('click', () => {
    return cardCreator(newCard)
})

    

};

console.log(pokeContainer)
console.log(pokeCards)