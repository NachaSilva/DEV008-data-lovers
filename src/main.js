import { filterTipo, sortData } from "./data.js";
import data from "./data/pokemon/pokemon.js";

const pokemonContainer = document.getElementById("datospokemon");

function pokemonCardsCreator(pokemonesADibujar) {
  pokemonContainer.innerHTML = ""; //reemplazar el contenido de un elemento

  for (const pokemon of pokemonesADibujar) {
    const card = document.createElement("div");
    card.setAttribute("id", "cartaPokemon");
    card.innerHTML = `<p id="cpmax">${"MAX-CP: " + pokemon.stats["max-cp"]}</p>
    <h3 id="nombrepokemon">${pokemon.name}</h3>
    <img id="imagenpokemon" src="${pokemon.img}"/> 
    <p id="tipopokemon">${pokemon.type}</p>
    <p id="aboutpokemon">${pokemon.about}</p>
    <button id="buttonMoreInfo">Estadísticas</button>`;

    pokemonContainer.append(card);
  }
}
pokemonCardsCreator(data.pokemon);

const userSelection = document.getElementById("selectOptions");

userSelection.addEventListener("change", function () {
  const optionsType = userSelection.value;
  const filteredData = filterTipo(data.pokemon, optionsType);

  pokemonCardsCreator(filteredData);
});

const userSelectionOrder = document.getElementById("selectOptionsOrder");

userSelectionOrder.addEventListener("change", function () {
  const sortBy = "max-cp";
  //const sortOrder = userSelectionOrder.value;
  let sortOrder;
  if (userSelectionOrder.value === "mayor-menor") {
    sortOrder = "De Mayor a Menor";
  } else {
    sortOrder = "De Menor a Mayor";
  }

  const sortOrderByCp = sortData(data.pokemon, sortBy, sortOrder);

  pokemonCardsCreator(sortOrderByCp);
  
});
