const usContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {


    // console.log( nombre, edad, rango );
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

const { nombreClave, anios, latlng: { lat, lng } } = usContext( persona );

console.log(nombreClave, anios);
console.log( lat, lng );


