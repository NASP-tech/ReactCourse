const persona = {
    nombre: 'Natalia',
    apellido: 'Stark',
    edad: 23,
    direccion: {
        ciudad: 'New York',
        zip: 2342,
        lat: 14.32,
        lng: 34.92
    }
};

const persona2 = {...persona};
persona2.nombre = 'Alexandra';


console.log( persona );
console.log( persona2 )