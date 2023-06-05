// estas funciones son de ejemplo

export const anotherExample = () => {
  return "OMG";
};

export const filterTipo = (data, optionsType) => {
  const tipoFiltro = data.filter((element) =>
    element.type.includes(optionsType)
  );
  return tipoFiltro;
};

export const sortData = (data, sortBy, sortOrder) => {
  const arrayNewData =  data.slice();
  if (sortOrder === "De Mayor a Menor") {
    return arrayNewData.sort((a, b) => {
      if (parseInt(a.stats[sortBy]) > parseInt(b.stats[sortBy])) {
        return -1;
      }
      if (parseInt(a.stats[sortBy]) < parseInt(b.stats[sortBy])) {
        return 1;
      }
      return 0;
    });
  } else {
    return arrayNewData.sort((a, b) => {
      if (parseInt(a.stats[sortBy]) > parseInt(b.stats[sortBy])) {
        return 1;
      }
      if (parseInt(a.stats[sortBy]) < parseInt(b.stats[sortBy])) {
        return -1;
      }
      return 0;
    });
  }
};

//Calculo agregado EPS
export const calculateEps = (attack) => {
  const result = attack.map((obj) => {
    const energy = Number(obj.energy);
    const time = Number(obj['move-duration-seg']);
    const eps = Math.round(energy / time);
    return eps;
  });
  return result;
};