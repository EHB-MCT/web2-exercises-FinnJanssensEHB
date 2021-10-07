"use strict;"

import Pokemon from "./Pokemon.js"

let pokemons = [];

window.onload = function () {
  fetchPokemons().then(data => {
    let fillPokemonArray = new Promise((resolve, reject) => {
      data.results.forEach(pokemon => {
        fetchPokemonData(pokemon).then(data2 => {
          let newPokemon = new Pokemon(data2);
          pokemons.push(newPokemon);
        })
      });
    });
    fillPokemonArray.then(() => {
      sortPokemons();
      renderList();
    });
  });
}

async function fetchPokemons() {
  let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  let data = await response.json();
  return data;
}

async function fetchPokemonData(pokemon) {
  let response2 = await fetch(pokemon.url);
  let data2 = await response2.json();
  return data2;
}

function sortPokemons() {
  pokemons.sort(function (a, b) {
    console.log(a.id);
    return b.id - a.id;
  })
}