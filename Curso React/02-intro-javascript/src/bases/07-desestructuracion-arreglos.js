//Desestructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3 ] = personajes; // ,p2 para indicar que el 1er elemento no me intersa, solo el segundo
console.log(p3);

const retornaArreglo = () =>{
    return['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


//Tarea
//1- el primer valor del arr se llamara nombre
//2- se llaara setnombre

const Estado = ( valor ) => {
    return [valor, ()=>{ console.log('Hola mundo') } ]; //Parece extraño pero es un arreglo
}

const [ nombre, nombre2] = Estado( 'Goku');
console.log(nombre);
nombre2();



