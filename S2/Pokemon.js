"use strict;"

class Pokemon {
  constructor(fetchedPokemon) {
    this.name = fetchedPokemon.name;
    this.id = fetchedPokemon.id;
    this.types = fetchedPokemon.types;
    this.sprite = fetchedPokemon.sprites.front_default;
  }
  // getHTML() {
  //   return `
  //   <div class="pokemonContainer">
  //     <img class="pokemonSprite" src="${this.sprite}"
  //       alt="Pokemon Sprite">
  //     <p class="pokemonID">Nr.${this.id}</p>
  //     <p class="pokemonName">${this.name}</p>
  //     <div class="typesContainer">
  //       <p class="pokemonType typePoison"></p>
  //       <p class="pokemonType typeGrass"></p>
  //     </div>
  //     <button class="teamBtn">Add to team</button>
  //   </div>
  //   `;
  // }
}

export default Pokemon;