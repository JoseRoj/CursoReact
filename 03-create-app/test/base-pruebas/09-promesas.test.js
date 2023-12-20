import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en el archivo 09-promesas.test.js", () => {
  test("debe de retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual({ id: 1, name: "Batman", owner: "DC" });
      done();
    });
  });
  test("debe de retornar un error", (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .then((heroe) => {
        expect(heroe).toBeFalsy();
        done();
      })
      .catch((err) => {
        done();
      });
  });
});
