const randomImage = document.querySelector('.random-image');
const randomId = Math.floor(Math.random() * 151) + 1;

fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    .then(response => response.json())
    .then(pokemon => {
        randomImage.src = pokemon.sprites.other['official-artwork'].front_default;
    });