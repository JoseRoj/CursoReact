import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en el archivo 08-imp-exp.test.js", () => {
  test("getHeroeById debe de retornar un heroe por ID", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    expect(heroe).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });
  test("getHeroeById debe de retornar undefined si heroe no existe", () => {
    const id = 100;
    const heroe = getHeroeById(id);
    expect(heroe).toBeFalsy();
  });
  test("getHeroesByOwner debe de retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(3);
    expect(heroes).toStrictEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
  });
  test("getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(2);
    expect(heroes).toEqual([
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ]);
  });
});
