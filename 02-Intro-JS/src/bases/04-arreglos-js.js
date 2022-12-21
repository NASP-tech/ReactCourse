//const arreglo = new Array( 100 );
const arreglo = [];
//arreglo.push(1)

//romper referencia del arreglo, y añadir elementos
let arreglo2 = [...arreglo, 5];
//arreglo2.push(5)

const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);