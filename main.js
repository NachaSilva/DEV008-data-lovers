import { filterTipo, sortData, calculateEps } from "./data.js";
import data from "./data/pokemon/pokemon.js";

let openModals = "";
//Mostrar Data
const TypeOfPokemon = (arrayOfType) => {
  let imgEachPokemon = "";
  arrayOfType.forEach((typeElement) => {
    imgEachPokemon += `<img src="img/iconos/${typeElement}.png" alt=" type pokemon"/>`;
  });
  return imgEachPokemon;
};
const pokemonContainer = document.getElementById("datospokemon");

//Mostrar Data Modal
const dataModalPokemon = document.getElementById("dataModal");
const obtainNames = (attack) => {
  let obtainAttackName = "<div>";
  for (const attackObj of attack) {
    const title = "<p>" + attackObj.name + "</p>";
    obtainAttackName += title;
  }
  obtainAttackName += "</div>";
  return obtainAttackName;
};

const obtainEnergy = (attack) => {
  let obtainEnergyName = "<div class=datoModal>";
  for (const nameObj of attack) {
    const title = "<p>" + nameObj.energy + "</p>";
    obtainEnergyName += title;
  }
  obtainEnergyName += "</div>";
  return obtainEnergyName;
};

const obtainTime = (attack) => {
  let obtainTimeName = "<div>";
  for (const timeObj of attack) {
    const title = "<p>" + timeObj.energy + "</p>";
    obtainTimeName += title;
  }
  obtainTimeName += "</div>";
  return obtainTimeName;
};
//Modal y muestre data
const buttonHandler = () => {
  const modal = document.querySelector(".modal");
  openModals = document.querySelectorAll(".buttonMore");

  openModals.forEach((openModal) => {
    openModal.addEventListener("click", (e) => {
      e.preventDefault();
      const buttonId = e.target.classList[1].split("-")[1]; //Se extrae el numero del Pokemon utilizando el metodo split('-')
      const pokemonData = data.pokemon.find(
        (pokemon) => pokemon.num === buttonId
      );
      pokemonModalCreator([pokemonData]);
      modal.classList.add("modal--show");
    });
  });

  dataModalPokemon.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal--show");
  });
};

function pokemonCardsCreator(pokemonesADibujar) {
  pokemonContainer.innerHTML = ""; //reemplazar el contenido de un elemento

  for (const pokemon of pokemonesADibujar) {
    const card = document.createElement("div");
    card.setAttribute("id", "cartaPokemon");
    card.setAttribute("class", "filtroPokemon");
    card.innerHTML = `<p id="cpmax">${"MAX-CP: " + pokemon.stats["max-cp"]}</p>
    <h3 class="nombrePokemonBusqueda">${pokemon.name}</h3>
    <img id="imagenpokemon" src="${pokemon.img}"/> 
    <div id="iconType">${TypeOfPokemon(pokemon.type)}</div>
    <button class="buttonMore" id="buttonMoreInfo">Estadísticas</button>`;

    const button = card.querySelector(".buttonMore");
    button.setAttribute("class", "buttonMore buttonMore-" + pokemon.num);

    pokemonContainer.append(card);
  }
  openModals = document.querySelectorAll(".buttonMore");
  buttonHandler();
}
pokemonCardsCreator(data.pokemon);

//Input de búsqueda
const pokemonInput = document.getElementById("input");

pokemonInput.addEventListener("keyup", (e) => {
  if (e.target.matches("#input")) {
    if (e.key === "Escape") e.target.value = "";
    document.querySelectorAll(".filtroPokemon").forEach((pokemon) => {
      pokemon
        .getElementsByTagName("h3")[0]
        .textContent.toLowerCase()
        .includes(e.target.value.toLowerCase())
        ? pokemon.classList.remove("datospokemon")
        : pokemon.classList.add("datospokemon");
    });
  }
});

//Filtrar por tipo de Pokemon
const userSelection = document.getElementById("selectOptions");

userSelection.addEventListener("change", function () {
  const optionsType = userSelection.value;
  const filteredData = filterTipo(data.pokemon, optionsType);

  pokemonCardsCreator(filteredData);
});

//Filtrar por orden CP
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

function pokemonModalCreator(pokemonesModalDibujar) {
  dataModalPokemon.innerHTML = "";

  for (const pokemon of pokemonesModalDibujar) {
    const cardModal = document.createElement("div");
    cardModal.setAttribute("class", "modal__container");
    cardModal.innerHTML = `<div id="modalInfoCover">
    <p id="numPokemon">${pokemon.num}</p>
    <h3 class="nombrePokemonBusqueda" id="nombrepokemon">${pokemon.name}</h3>
    <div id="imagenPokemonModal"><img src="${pokemon.img}"/></div>
    <p id="aboutpokemon">${pokemon.about}</p>
    <h2 id="attackTitle">Quick-Move</h2>
    <div id="attackGroup">
    <p id="attackInfo">Attack</p>
    <p id="attackInfo">Energy</p>
    <p id="attackInfo">Time</p>
    <p id="attackInfo">EPS</p>
    </div>
    <div id="attackValues">
    <div id="attackNames">${obtainNames(pokemon["quick-move"])}</div>
    <div id="attackEnergy">${obtainEnergy(pokemon["quick-move"])}</div>
    <div id="attackTime">${obtainTime(pokemon["quick-move"])}</div>
    <div id="totalEps">${calculateEps(pokemon["quick-move"])}</div>
    </div>
    </div>
    <a href="#" class="modal__close">x</a>`;

    dataModalPokemon.append(cardModal);
  }
}
pokemonModalCreator(data.pokemon);

//Para que se cierre la ventana
//si encuentra la clase modal__close que es del boton de cerrar, entonces se cierra
buttonHandler();
