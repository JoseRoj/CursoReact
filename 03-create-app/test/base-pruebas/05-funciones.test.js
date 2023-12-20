import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en el archivo 05-funciones.test.js", () => {
  test("getUser debe de retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    expect(testUser).toEqual(user);
  });

  // Tarea
  test("getUsuarioActivo debe de retornar un objeto", () => {
    const nombre = "Jose";
    const testUser = {
      uid: "ABC567",
      username: nombre,
    };
    const user = getUsuarioActivo(nombre);
    expect(testUser).toEqual(user);
  });
});
