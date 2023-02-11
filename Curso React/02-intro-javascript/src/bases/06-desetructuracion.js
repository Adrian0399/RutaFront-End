//Desestructuración de archivos
// Asignación desestructurante

const persona = {
    nombre: 'Adrian',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

//const {nombre, edad, clave} = persona;

//console.log (nombre);
//console.log (edad);
//console.log (clave);


const UseContext = ( {clave, nombre, edad, rango = 'Capitan'} ) => {

    //console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:14.12421,
            lng:-12.5811
        }
    }

}

const {nombreClave, anios, latlng:{lat, lng}} = UseContext( persona );
//const {nombreClave, anios, latlng} = UseContext( persona ); 
//const {lat, lng} = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);
