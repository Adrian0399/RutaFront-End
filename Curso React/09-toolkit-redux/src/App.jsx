
import reactLogo from './assets/react.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './store/slices/counter';

function App() {

  const { counter } = useSelector( state => state.counter );
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>Count is: { counter }</h1>
      <div className="card">
        <button onClick={ () => dispatch( increment() ) }>
          +1
        </button>
        <button onClick={ () => dispatch( decrement() ) }>
          -1
        </button>
        <button onClick={ () => dispatch( incrementByAmount(2) ) }>
          x2
        </button>
      </div>
    </div>
  )
}

export default App
