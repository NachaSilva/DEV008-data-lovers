// estas funciones son de ejemplo

export const anotherExample = () => {
  return "OMG";
};

export const filterTipo = (data, optionsType) => {
  const tipoFiltro = data.filter((element) => element.type.includes(optionsType));
  return tipoFiltro;
};
