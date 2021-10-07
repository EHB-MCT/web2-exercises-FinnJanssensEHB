"use strict;"

class Pokemon {
  constructor(fetchedPokemon) {
    this.name = fetchedPokemon.name;
    this.url = fetchedPokemon.url;
  }
}

export default Pokemon;