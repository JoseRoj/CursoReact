// Funciones en JS
//!function saludar(nombre) {
//!    return `Hola ${nombre}`;
//!}

const saludar2 = (nombre) => `Hola ${nombre}`;


console.log(saludar2('Jose'));

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
};

console.log(getUser());

/*function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
}*/
const getUsuarioActivo = (nombre) =>
    ({
        uid: 'ABC567',
        username: nombre
    })
const userActivo = getUsuarioActivo('Jose');
console.log(userActivo);