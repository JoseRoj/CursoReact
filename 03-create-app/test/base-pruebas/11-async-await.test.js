import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas en el archivo 11-async-await.test.js", () => {
  test("getImagen debe de retornar el url de la imagen", async () => {
    const url = await getImagen();
    console.log(url);
    expect(typeof url).toBe("string");
    //expect(url.includes("https://")).toBe(true);
  });
});
