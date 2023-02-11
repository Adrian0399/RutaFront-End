
import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe ('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'Kaibil57'
        };

        const user = getUser();

        expect( testUser ).toEqual( user );
    });

    test('getUsuarioActivo debe de retornar un objeto', () => {

        const name = 'Kaibi57';

        const user = getUsuarioActivo( name );
        
        expect( user ).toStrictEqual({
            uid: 'ABC567',
            username: name
        });

    });

});