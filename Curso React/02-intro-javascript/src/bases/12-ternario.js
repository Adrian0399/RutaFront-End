//Operador condicional Ternario 
//Manera corta de hacer una desicion

const activo = true;

// let mensaje = '';

// if( activo ){
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }

//const mensaje = (activo) ? 'Activo' : 'Inactivo';
//const mensaje = (!activo) ? 'Activo' : 'Inactivo';

//const mensaje = (activo) ? 'Activo' : null;
const mensaje = (activo === true) && 'Activo'

console.log(mensaje);