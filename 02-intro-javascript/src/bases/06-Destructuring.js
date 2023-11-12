
const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [p1] = personajes;
console.log(p1); 

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);



const usestate = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }];
}

const [nombre,setNombre] = usestate('Goku');


console.log(nombre);
setNombre();
