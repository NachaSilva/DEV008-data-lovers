import { filterTipo } from "./data.js";
import data from "./data/pokemon/pokemon.js";

let pokemonContainer = document.getElementById("datospokemon");

function pokemonCardsCreator() {
  for (let pokemon of data.pokemon) {
    let card = document.createElement("div");
    card.setAttribute("id", "cartaPokemon");
    card.innerHTML = `<h3 id="nombrepokemon">${pokemon.name}</h3>
    <img id="imagenpokemon" src="${pokemon.img}"/> 
    <p id="tipopokemon">${pokemon.type}</p>
    <p id="aboutpokemon">${pokemon.about}</p>`;

    pokemonContainer.append(card);
  }
}
pokemonCardsCreator();

const userSelection = document.getElementById("selectOptions");

userSelection.addEventListener("change", function () {
  let optionsType = userSelection.value;

  console.log(optionsType);
  return optionsType;
});
//let optionsType = optionsType;

//console.log(filterTipo(data.pokemon, optionsType));
