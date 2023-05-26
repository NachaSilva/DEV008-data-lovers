import { filterTipo, anotherExample } from "../src/data.js";

describe('filterTipo', () => {
  it('is a function', () => {
    expect(typeof filterTipo).toBe('function');
  });

  // it('returns `grass`', () => {
  //   const dataTypes = [
  //     "grass",
  //     "poison"
  //   ]
  //   const optionsType = filterTipo(dataTypes);
  //   expect( optionsType ).toEqual("grass");
  // });
});

describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
