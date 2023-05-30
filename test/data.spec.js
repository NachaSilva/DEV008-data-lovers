import { filterTipo, anotherExample } from "../src/data.js";

describe('filterTipo', () => {
  it('is a function', () => {
    expect(typeof filterTipo).toBe('function');
  });

  it('returns `grass`', () => {
    const dataTypes = [
      {
        "type": [
          "grass",
          "poison"
        ],
      },
      {
        "type": [
          "grass",
        ],
      },
      {
        "type": [
          "poison"
        ],
      }
    ]
    //Comprobar si al menos uno de los objetos en el array tiene la propiedad "type" que contiene el valor "grass". 
    const optionsType = filterTipo(dataTypes, "grass");
    //El método some es para iterar sobre los objetos en el array optionsType y comprobar si al menos uno de ellos tiene la propiedad "type" que contiene el valor "grass".
    expect(optionsType.some(obj => obj.type.includes("grass"))).toBe(true);
  });
});

describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
