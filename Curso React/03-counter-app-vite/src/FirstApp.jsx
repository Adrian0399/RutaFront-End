
import PropTypes from 'prop-types';

export const FirstApp = ( { title , subTitle, name} ) => {

    return (
    <>
    <h1 data-testid="test-title"> { title } </h1>
    <div>{ subTitle }</div>
    <div>{ subTitle }</div>
    <p>{ name }</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    title: "Hola, soy Adrian",
    subTitle: "No hay subtitulo",
    name: "Adrian Olvera Ordoñez"
}