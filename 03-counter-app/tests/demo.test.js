
describe('Pruebas en <DemoComponent/>', () => {
    test('Esta prueba no debe de fallar', ()=> {
        // if(1 === 0){
        //     throw new Error('No puede dividir entre cero')
        // }

        //1. inicializacion
        const mensaje1 = 'Hola Mundo';
        //2. estimulo
        const mensaje2 = mensaje1.trim();
        //3. observar el comportamiento..esperado
        expect(mensaje1).toBe(mensaje2);
    })
});


