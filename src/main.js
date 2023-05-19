import { example } from "./data.js";
//import { datospokemon } from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";

// import data from './data/rickandmorty/rickandmorty.js';

//document.getElementById("datospokemon").innerHTML = datospokemon;

console.log(data.pokemon[0].name);
console.log(data.pokemon[0].type);

let pokemonContainer = document.getElementById("datospokemon");

// Crea un nuevo elemento de imagen
var img = document.getElementById("imagenpokemon");
// Establece la ubicación de la imagen
//img.src = data.pokemon[0].img;
// Agrega la imagen al documento
//document.body.appendChild(img);
//img.appendChild(imagen);

let tipo = document.getElementById("tipopokemon");
let about = document.getElementById("aboutpokemon");

//nombre.innerHTML = data.pokemon[0].name;
//tipo.innerHTML = data.pokemon[0].type;
//about.innerHTML = data.pokemon[0].about;

for (let pokemon of data.pokemon) {
  let card = document.createElement("div");
  card.setAttribute("id", "cartaPokemon");
  (card.innerHTML = `<h3 id="nombrepokemon">${pokemon.name}</h3>
    <img id="imagenpokemon" src="${pokemon.img}"/> 
    <p id="tipopokemon">${pokemon.type}</p>
    <p id="aboutpokemon">${pokemon.about}</p>`);

  pokemonContainer.append(card);
}
