
const newMessage = {
  message: 'Hola Mundo',
  title: 'Adrian'
};

const homework = {
  title: 'Hacer la tarea',
  hora: '10pm'
}


const getResult = (a, b) => {
  return a * b;
}

export const FirstApp = () => {
  
  return (
    <>
      {/*<code>{ JSON.stringify (newMessage) }</code>*/}
      <h1>{ newMessage.message }</h1>
      <h1>{ newMessage.title }</h1>
      <h1>Hola Mundo</h1>
      <p>Soy un subtitulo</p>
      <h1>{ homework.title }</h1>
      <h1>{ homework.hora }</h1>
      <h1>{ getResult( 10, 20) }</h1>
    </>
    )
}
