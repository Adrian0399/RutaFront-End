// Funciones en JS

// const saludar = function ( nombre ){
//    return `Hola, ${ nombre }`;
// }
//Transformar la funcion anterior a un funcion de flecha
const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`; //Lo mismo que la funcion2, solo que ahora en menos codigo, mas facil de leer
const saludar4 = () => `Hola mundo`;



// console.log( saludar ('Goku') )

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

/* const getUser = () => {
    return{
        uid: 'ANC123',
        username: 'Kaibil57'
    }
}*/ 
//Para que no de error a quitar return y {} agregar ()
const getUser = () => ({
        uid: 'ABC123',
        username: 'Kaibil57'
    });

const user = getUser();
console.log(user);

//Tarea
// 1. Transformen a una funcion de Flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

const getUsuarioActivo = ( nombre ) =>({
        uid: 'ABC567',
        username: nombre
})

const UsuarioActivo = getUsuarioActivo('Adrian');
console.log(UsuarioActivo);


