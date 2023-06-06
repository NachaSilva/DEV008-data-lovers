import { filterTipo, sortData, calculateEps } from "./data.js";
import data from "./data/pokemon/pokemon.js";

//Mostrar Data
const pokemonContainer = document.getElementById("datospokemon");

function pokemonCardsCreator(pokemonesADibujar) {
  pokemonContainer.innerHTML = ""; //reemplazar el contenido de un elemento

  for (const pokemon of pokemonesADibujar) {
    const card = document.createElement("div");
    card.setAttribute("id", "cartaPokemon");
    card.setAttribute("class", "filtroPokemon");
    card.innerHTML = `<p id="cpmax">${"MAX-CP: " + pokemon.stats["max-cp"]}</p>
    <h3 class="nombrePokemonBusqueda" id="nombrepokemon">${pokemon.name}</h3>
    <img id="imagenpokemon" src="${pokemon.img}"/> 
    <p id="tipopokemon">${pokemon.type}</p>
    <button class="buttonMore" id="buttonMoreInfo">Estadísticas</button>`;

    const button = card.querySelector(".buttonMore");
    button.setAttribute("class", "buttonMore buttonMore-" + pokemon.num);

    pokemonContainer.append(card);
  }
}
pokemonCardsCreator(data.pokemon);

//Input de búsqueda
const pokemonInput = document.getElementById("input");

pokemonInput.addEventListener("keyup", (e) => {
  if (e.target.matches("#input")) {
    if (e.key === "Escape") e.target.value = "";
    document.querySelectorAll(".filtroPokemon").forEach((pokemon) => {
      //console.log(pokemon.getElementsByTagName("h3")[0].textContent.toLowerCase().includes(e.target.value.toLowerCase())? pokemon.classList.remove("datospokemon") : pokemon.classList.add("datospokemon"))
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

//Mostrar Data Modal
const dataModalPokemon = document.getElementById("dataModal");
const obtainNames = (attack) => {
  const names = attack.map(name => name.name);
  return names;
};

const obtainEnergy = (attack) => {
  const energy = attack.map(energy => energy.energy);
  return energy;
};

const obtainTime = (attack) => {
  const time = attack.map(time => time["move-duration-seg"]);
  return time;
};


function pokemonModalCreator(pokemonesModalDibujar) {
  dataModalPokemon.innerHTML = "";

  for (const pokemon of pokemonesModalDibujar) {
    const cardModal = document.createElement("div");
    cardModal.setAttribute("class", "modal__container");
    cardModal.innerHTML = `<p id="numPokemon">${pokemon.num}</p>
    <h3 class="nombrePokemonBusqueda" id="nombrepokemon">${pokemon.name}</h3>
    <img id="imagenpokemon" src="${pokemon.img}"/> 
    <p id="aboutpokemon">${pokemon.about}</p>
    <h2 class="attackTitle">Quick-Move</h2>
    <p id="attackInfo">Attack</p>
    <div>${(obtainNames(pokemon['quick-move']))}</div>
    <p id="attackInfo">Energy</p>
    <div id="attackEnergy">${(obtainEnergy(pokemon['quick-move']))}</div>
    <p id="attackInfo">Time</p>
    <div id="attackTime">${(obtainTime(pokemon['quick-move']))}</div>
    <p id="attackInfo">EPS</p>
    <div>${calculateEps(pokemon["quick-move"])}</div>
    <a href="#" class="modal__close">x</a>`;

    dataModalPokemon.append(cardModal);
  }
}
pokemonModalCreator(data.pokemon);

//Modal y muestre data
const openModals = document.querySelectorAll(".buttonMore");
const modal = document.querySelector(".modal");

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

//Para que se cierre la ventana
//si encuentra la clase modal__close que es del boton de cerrar, entonces se cierra
dataModalPokemon.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal--show");
});
