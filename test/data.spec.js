import { filterTipo, anotherExample } from "../src/data.js";

describe("filterTipo", () => {

  it("returns `grass`", () => {
    const dataTypes = [
      {
        type: ["grass", "poison"],
      },
      {
        type: ["grass"],
      },
      {
        type: ["poison"],
      },
    ];

    expect(filterTipo(dataTypes, "grass")).toEqual([
      {
        type: ["grass", "poison"],
      },
      {
        type: ["grass"],
      },
    ]);
  });
});

describe("anotherExample", () => {
  it("is a function", () => {
    expect(typeof anotherExample).toBe("function");
  });

  it("returns `anotherExample`", () => {
    expect(anotherExample()).toBe("OMG");
  });
});
