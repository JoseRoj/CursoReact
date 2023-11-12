//!const arreglo = new Array();
const arreglo = [];
///

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function (numero) {
    return numero * 2;
})