// FLIP EFFECT ===========================================
var front = document.querySelector('.pokemon-box-front');
var back = document.querySelector('.pokemon-box-back');
var pokemonBox = document.querySelector('#pokemon-box');

pokemonBox.addEventListener("click", function() {
  if (pokemonBox.classList.contains('flipped')) {
    pokemonBox.classList.remove('flipped');
  } else {
    pokemonBox.classList.add('flipped');
  }
});

document.getElementById('pokemon-name').addEventListener('input', (event) => {
    const name = event.target.value.toLowerCase();
    getPokemon(name);
  });

  function getPokemon(name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".pokemon-box-front").innerHTML = ` 
          <div class="pokemon-box-front">
            <p>Front content</p>
            <div id="image-container">
              <img src="${data.sprites.other["official-artwork"].front_default}" alt="Picture of ${data.name}" />
            </div>
            <div class="pokemon-info">
              <h1>${data.name}</h1>
              <p>${data.height}</p>
            </div>
          </div>`;
      })
      .catch((err) => {
        console.log("Pokemon Not Found!", err);
      });
  }
