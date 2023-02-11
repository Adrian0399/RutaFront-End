
const nombre = "Adrian";
const apellido = "Olvera";

//const nombreCompleto = nombre + '' + apellido;
//const nombreCompleto = `${nombre} ${apellido}`;
const nombreCompleto = `
${nombre} 
${apellido}
${ 1 + 1}
`;

console.log( nombreCompleto );

function getSaludo (nombre){
    return "Hola Mundo";
}

console.log(`Este es un texto: ${ getSaludo( nombre )}`);

