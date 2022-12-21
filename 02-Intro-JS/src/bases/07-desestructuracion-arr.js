const personajes = ['Natalia', 'Alexandra', 'Solorzano'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);


const [, , person] = personajes;

console.log(person);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//1. El primer valor del arr se llamara nombre
//2. El segundo setNombre
const useState = (valor) => {
    return [valor, ()=> {console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useState('Natalia');
console.log(nombre);
setNombre();