import { filterTipo, sortData, calculateEps } from "../src/data.js";

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

describe("sortData", () => {
  const dataTypes = [
    {
      type: ["grass", "poison"],
      stats: {
        "max-cp": "1115",
      },
    },
    {
      type: ["grass"],
      stats: {
        "max-cp": "100",
      },
    },
    {
      type: ["poison"],
      stats: {
        "max-cp": "1000",
      },
    },
  ];

  it("que retorne de mayor a menor", () => {
    expect(sortData(dataTypes, "max-cp", "De Mayor a Menor")).toEqual([
      {
        type: ["grass", "poison"],
        stats: {
          "max-cp": "1115",
        },
      },
      {
        type: ["poison"],
        stats: {
          "max-cp": "1000",
        },
      },
      {
        type: ["grass"],
        stats: {
          "max-cp": "100",
        },
      },
    ]);
  });

  it("que retorne de menor a mayor", () => {
    expect(sortData(dataTypes, "max-cp", "De Menor a Mayor")).toEqual([
      {
        type: ["grass"],
        stats: {
          "max-cp": "100",
        },
      },
      {
        type: ["poison"],
        stats: {
          "max-cp": "1000",
        },
      },
      {
        type: ["grass", "poison"],
        stats: {
          "max-cp": "1115",
        },
      },
    ]);
  });
  it("que retorne el mismo valor", () => {
    const dataEqual = [
      {
        type: ["grass", "poison"],
        stats: {
          "max-cp": "100",
        },
      },
      {
        type: ["grass"],
        stats: {
          "max-cp": "100",
        },
      },
    ];
    expect(sortData(dataEqual, "max-cp", "De Mayor a Menor")).toEqual([
      {
        type: ["grass", "poison"],
        stats: {
          "max-cp": "100",
        },
      },
      {
        type: ["grass"],
        stats: {
          "max-cp": "100",
        },
      },
    ]);
  });
  it("que retorne el mismo valor", () => {
    const dataEqual = [
      {
        type: ["grass", "poison"],
        stats: {
          "max-cp": "100",
        },
      },
      {
        type: ["grass"],
        stats: {
          "max-cp": "100",
        },
      },
    ];
    expect(sortData(dataEqual, "max-cp", "De Menor a Mayor")).toEqual([
      {
        type: ["grass", "poison"],
        stats: {
          "max-cp": "100",
        },
      },
      {
        type: ["grass"],
        stats: {
          "max-cp": "100",
        },
      },
    ]);
  });
});

describe("calculateEps", () => {
  const dataEps = [
    {
      name: "vine whip",
      energy: "6",
      "move-duration-seg": "0.6",
    },
    {
      name: "tackle",
      energy: "5",
      "move-duration-seg": "0.5",
    },
  ];
  it("retornar Eps", () => {
    expect(calculateEps(dataEps)).toEqual("<div><p>10</p><p>10</p></div>");
  });
});



