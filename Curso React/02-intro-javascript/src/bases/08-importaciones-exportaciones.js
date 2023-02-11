// import {heroes} from './data/heroes'; //Importar el archivo heroes.js
// import {heroes} from './data/heroes';

//import { heroes } from "./data/heroes";
//import heroes from "./data/heroes"; - Exportacion por defecto
import heroes, { owners } from "../data/heroes";

//console.log ( owners );

//const getHeroeById = (id) => {
//    return heroes.find(( heroe ) =>{
//        If(heroe.id === id) {
//            return true;
//        } else {
//            return false;
//        }
//    });
//}

//const getHeroeById = (id) => {
//    return heroes.find((heroe) => heroe.id === id);
//}

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

//console.log( getHeroeById(2));

//find no sirve en este caso
//filter para regresar 2 o mas datos del arreglo
export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
//console.log(getHeroeByOwner('DC'));
//console.log(getHeroeByOwner('Marvel'));

