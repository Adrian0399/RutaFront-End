

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'Ixtapaluca',
        zip: 56530,
        lat: 14.4234,
        lgn: 63.3523
    }
};


//console.log ({persona); 
//console.table ({persona});

const persona2 = {...persona}; //Clonar el objeto sin modificar los valores
persona2.nombre = 'Peter';

console.log (persona); 
console.log(persona2)