
// Variables y constantes

const nombre = 'Adrian'; //Variables que no van a cambiar o no se van a renombrar
const apellido = 'Olvera'; 

let valorDado = 5; //let para variables que van a cambiar
valorDado = 4;

console.log(nombre, apellido, valorDado)

// var NO SE DEBE DE USAR... para evitar problemas 
if ( true ) {
    const nombre = 'Pedro';
    let valorDado = 6;

    console.log(valorDado)
    console.log(nombre)
}

console.log(valorDado)
