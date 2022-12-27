import getHeroeById from './08-import-export';

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( ()=>{
        
//         const heroe = getHeroeById(2);
//         console.log(heroe);

//         resolve(heroe);

//        //reject ('No se pudo encontra el héroe');

//     }, 2000)
// });

// promesa.then ( () => {
//     console.log('Heroe')
// })
// .catch(error => console.warn( error ));


const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( ()=>{
            
            const heroe = getHeroeById(id);
            // 
            
            if (heroe) {
                resolve(heroe);
            }
            else{
                reject ('No se pudo encontra el héroe');
            } 
        }, 2000)
    });

    // return promesa;
}

getHeroeByIdAsync(3)
    .then(console.log)
    .catch(console.warn)