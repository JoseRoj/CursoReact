import { getHeroeById } from './bases/07-Export';
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(2);
        resolve(heroe);
        //reject('Se terminó el timeout');
    }, 2000);
});

promesa.then((heroe) => {
    console.log("hero", heroe);
}).catch((err) => {
    console.warn(err);
});

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            }else{
            reject('Nose pudo encontrar el heroe');
        }}, 2000);
    });
}

getHeroeByIdAsync(10)
    .then(heroe => console.log("heroe", heroe))
    .catch(console.warn);