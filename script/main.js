import { pokedex } from '../Pokemon-DB-master/pokedex.js'

console.log(pokedex)

const pokeContainer = document.querySelector('#container')


//Front Card 
const cardCreator = (poke) => {
    console.log(`${poke.id}${poke.ename}.png`)
    let card = document.createElement('div')
    let fig = document.createElement('figure')
    let img = document.createElement('img')
    let cap = document.createElement('figcaption')

    fig.appendChild(img)
    fig.appendChild(cap)
    card.appendChild(fig)
//

//Back Card
    let backimg = document.createElement('img')
    let backcard = document.createElement('div')
    let stats = document.createElement('ul')
    let attack = document.createElement('li')
    let defense = document.createElement('li')
    let health = document.createElement('li')

    card.className = 'card'
    fig.className = 'front'
    img.className = 'pokemon-chara'
    cap.className = 'pokemonname'
    backimg.className = 'background'
    backcard.className = 'back'
    stats.className = 'traits'
    
    card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped')
    });

    attack.textContent = `(${poke.base["Attack"]})`
    defense.textContent = `(${poke.base["Defense"]})`
    health.textContent = `(${poke.base["HP"]})`
    cap.textContent = poke.ename
    img.src = `../Pokemon-DB-master/img/${poke.id}${poke.ename}.png`
    backimg.src = `../Pokemon-DB-master/spr/${poke.id}MS.png`
    
    // if(poke.id < '001') {
    //     img.src=`../Pokemon-dex/spr/100MS.png`
    // }
    pokeContainer.appendChild(card)
}

pokedex.forEach(element => cardCreator(element))

let cardCreation = document.querySelector('#createCreation')
cardCreation.addEventListener('click', () => {
return cardCreator(newCard)

})


console.log(pokeContainer)
console.log(cardCreator)