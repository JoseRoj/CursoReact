const nombre = "Jose";
const apellido = "Rojas";
const nombreCompleto = nombre + ' ' + apellido;
const nameCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nameCompleto)}`);