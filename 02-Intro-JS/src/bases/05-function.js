// const saludar = function(nombre){
//     return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar2 ('Natalia'));
console.log(saludar3('Alexandra'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'nasp'
})

const user = getUser();
console.log(user);


//1. Tranformar a una funcion flecha
//2. Retornar un objeto implicito
//3. Pruebas
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC345',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Natalia');
console.log(usuarioActivo);