
import PropTypes from 'prop-types';

export const CounterApp2 = ({ value2 }) => {
  return (
    <>
        <h1>CounterApp2</h1>
        <h2> { value2 } </h2>
    </> 
  )
}


CounterApp2.propTypes  = {
    value2: PropTypes.number.isRequired
}