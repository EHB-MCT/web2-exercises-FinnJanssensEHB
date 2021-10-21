"use strict;"

import Pokemon from "./Pokemon.js"

let pokemons = [];

window.onload = function () {
  fetchPokemons().then(data => {
    console.log(data);
    for (const pokemon of data.results) {
      fetchPokemonData(pokemon).then(data2 => {
        let newPokemon = new Pokemon(data2);
        pokemons.push(newPokemon);
      })
    }
    pokemons.sort(function (a, b) {
      return a.id - b.id;
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

function renderList() {
  console.log("renderList");
  pokemons.forEach(pokemon => {
    console.log(pokemon.getHTML());
    // document.getElementById("listContainer").insertAdjacentHTML(pokemon.getHTML());
  });
}