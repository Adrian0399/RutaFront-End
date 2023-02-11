
//Arregls en JS: Es una coleccion de informacion que se encuentra dentro de una misma variable

//const arreglo = new Array( 100 );

const arreglo =[1,2,3,4];
//arreglo.push(1)
//arreglo.push(1)
//arreglo.push(1)
//arreglo.push(1)
//arreglo.push(1)
//arreglo.push(1)

let arreglo2 = [...arreglo, 5]; //... extraer la informacion de la variable y añadir el 5
// arreglo2.push( 5 );

const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});


console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );


