"use strict;"

import Pokemon from "./Pokemon.js"

let pokemons = [];

window.onload = function () {
  fetchPokemons();
}

function fetchPokemons() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      data.results.forEach(pokemon => {
        let newPokemon = new Pokemon(pokemon);
        pokemons.push(pokemon)
      });
      console.log(pokemons);
    })
}