//Promesas = Igual en la vida real, te prometo que ... y notificar cuando terminas ó notificar cuando no puedes hacerlo
// El objeto Promise representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.

import {getHeroeById} from '..08-importaciones-exportaciones';

// const promesa = new Promise( (resolve, reject) => {
    
//     setTimeout( () => { //setTemout Funcion propia d JS que permite ejecutar una tarea en cierto tiempo y recibir un callback
//         //tarea     
//         //importar 
//         const p1 = getHeroeById(2);
//         //console.log(heroe);
//         //reject(p1);
//         resolve(p1); //Transferir el valor de los argumentos al then/catch/finally
//         //reject('No se pudo encontrar el héroe');
//     }, 2000) //ms
// }); //Promesa

// promesa.then((heroe) => {
//     console.log('heroe', heroe)
// })
// //.catch(err => console.warn(err)); //NO se puedo encontrar el heroe

const getHeroeByIdAsync = (id) => {  //Esta funcion de flecha recibe el id que se quiere buscar
    return new Promise( (resolve, reject) => {
    
        setTimeout( () => { //setTemout Funcion propia d JS que permite ejecutar una tarea en cierto tiempo y recibir un callback
            //tarea     
            //importar 
            const p1 = getHeroeById(id);
            if ( p1 ){
                resolve (p1);
            } else {
                reject('No se pudo encontrar el heroe');
            }
        }, 2000) 
    }); 


}
getHeroeByIdAsync(1)
//.then(heroe => console.log('Heroe', heroe))
.then(console.log)
//.catch( err => console.warn(err))
.catch(console.warn) //err, si el catch es enviado a otra función, se puede quitar el error y se manda la referencia a la funcion que se quiere ejecutar

