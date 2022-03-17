const poke_container = document.getElementById('poke-container')

const pokemon_count = 110
const colors = {
  fire: '#fddfdf',
  grass: '#defde0',
  electric: '#fcf7de',
  water: '#def3fd',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#f5f5f5',
  fighting: '#e6e0d4',
  normal: '#f5f5f5',
}

const fetchPokemon = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i)
  }
}
async function getPokemon(i) {
  const apiKey = 'https://pokeapi.co/api/v2/pokemon/'
  const result = await fetch(apiKey + i)
  const data = await result.json()

  createPokemonCard(data)
}

function createPokemonCard(data) {
  const capitalizedName = data.name[0].toUpperCase() + data.name.slice(1)
  const id = data.id.toString().padStart(3, '0')
  const pokemonCard = document.createElement('div')
  pokemonCard.classList.add('pokemon')
  pokemonCard.innerHTML = `
    <div class="img-container">
    <img
    src= "${data.sprites.other['official-artwork']['front_default']}"
    alt=""
    />
    </div>
    <div class="info">
    <span class="number">#${id}</span>
    <h3 class="name">${capitalizedName}</h3>
    <small>Type: <span>${data.types[0].type.name}</span></small>
    </div>
    `
  pokemonCard.style.background = `${colors[data.types[0].type.name]}`
  poke_container.appendChild(pokemonCard)
}

fetchPokemon()
