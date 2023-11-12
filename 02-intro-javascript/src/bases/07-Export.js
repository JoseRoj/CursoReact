import heroes, { owners } from '../data/heroes';
//console.log(owners);
export const getHeroeById = (id) => {
    return heroes.find( (heroe) => heroe.id === id );
};

//console.log(getHeroeById(1));

export const gerHeroesByOwner = (owner) => {
    return heroes.filter( (heroe) => heroe.owner === owner );
}

//console.log(gerHeroesByOwner('DC')); 