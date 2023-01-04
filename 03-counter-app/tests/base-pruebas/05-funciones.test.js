import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        //Cuando son objetos los que se verifican, tiene que ser mas estricto
        // se comparan a ubicacion de memoria, y no de forma primitiva
        expect(testUser).toStrictEqual(user);
        //o usar toEqual
    })

    test('getUsuarioActivo debe de retornar un objeto', () => {
        const name = 'Natalia';

        const testUsuarioActivo = {
            uid: 'ABC567',
            username: name
        };

        const active = getUsuarioActivo(name);

        expect(testUsuarioActivo).toEqual(active);
    })

    // test('usContext debe de retornar un objeto', () => {
    //     const clave = '123';
    //     const edad = 23;
        
    //     const testContext = {
    //         nombreClave: clave,
    //         anios: edad,
    //         latlng: {
    //             lat: 14.1232,
    //             lng: -12.3232
    //         }
    //     }

    //     const context = usContext({ nombreClave, anios, latlng: { lat, lng } } )

    //     expect(testContext).toEqual(context());

    // })
})