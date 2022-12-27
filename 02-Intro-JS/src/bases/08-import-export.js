import heroes, {owners} from '../data/heroes';

// const getHeroeById = (id) => {
//     return heroes.find((heroe) => {
//         if (heroe.id = id) { return true; }
//         else {return false;}
//     });
// }

//console.log(owners);

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

//console.log(getHeroeById(5));

//find?, filter
const getHeroesByOwner = (owner) => 
{
    return heroes.filter((heroe) => heroe.owner === owner);
}
//console.log(getHeroesByOwner('DC'));

export{
    getHeroeById as default,
    getHeroesByOwner
}