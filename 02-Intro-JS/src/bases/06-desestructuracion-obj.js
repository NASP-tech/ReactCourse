//Destructuracion
//Asignacion Destructurante

const persona = {
    nombre: 'Alexandra',
    edad: 23,
    clave: 'Christmas'
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({nombre, edad, clave, rango = 'Capitan'}) => {
    // console.table(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.12,
            lng: -12.32
        }
    }

};

const {nombreClave, anios, latlng: {lat, lng}} = useContext( persona );
console.log(nombreClave, anios);
console.log(lat, lng);