import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";


describe('Pruebas es 09-promesas', () => { 

    test('getHeroeByIdAsync debe de retornar un héroe', (done) => { 
        
        const id = 1 ;
        getHeroeByIdAsync( id )
            .then( hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            });

    });

    test('getHeroeByIdAsync debe de obtener un error si heroe no existe', (done) => { 
        
        const id = 100;
        getHeroeByIdAsync( id )
            .then(hero => {
                expect( hero ).toBeFalsy();
                done();
            })
            .catch( error => {
                expect( error ).toBe(`NO se pudo encontrar el heroe con el ${ id }`)
                done();
            });


    });
});