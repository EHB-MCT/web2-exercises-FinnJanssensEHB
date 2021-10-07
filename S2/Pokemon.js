"use strict;"

class Pokemon {
  constructor(fetchedPokemon) {
    this.name = fetchedPokemon.name;
    this.id = fetchedPokemon.id;
    this.types = fetchedPokemon.types;
    this.sprite = fetchedPokemon.sprites.front_default;
  }
}

export default Pokemon;