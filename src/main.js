import { filterTipo } from "./data.js";
import data from "./data/pokemon/pokemon.js";

let pokemonContainer = document.getElementById("datospokemon");

function pokemonCardsCreator(pokemonesADibujar) {
  pokemonContainer.innerHTML = ""; //reemplazar el contenido de un elemento

  for (let pokemon of pokemonesADibujar) {
    let card = document.createElement("div");
    card.setAttribute("id", "cartaPokemon");
    card.innerHTML = `<h3 id="nombrepokemon">${pokemon.name}</h3>
    <img id="imagenpokemon" src="${pokemon.img}"/> 
    <p id="tipopokemon">${pokemon.type}</p>
    <p id="aboutpokemon">${pokemon.about}</p>`;

    pokemonContainer.append(card);
  }
}
pokemonCardsCreator(data.pokemon);

const userSelection = document.getElementById("selectOptions");

userSelection.addEventListener("change", function () {
  let optionsType = userSelection.value;
  let filteredData = filterTipo(data.pokemon, optionsType);

  pokemonCardsCreator(filteredData);
  
  console.log(filterTipo(data.pokemon, optionsType));
});
