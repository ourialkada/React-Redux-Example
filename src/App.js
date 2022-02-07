import logo from './logo.svg';
import {useSelector,useDispatch} from 'react-redux';
import { setLogged } from './action/loggedAction';
import { increment } from './action/counterAction';
import { incrementBy } from './action/counterAction';
import { decrement } from './action/counterAction';
import { decrementBy } from './action/counterAction';
function App() {
  const dispatch = useDispatch();
  const count = useSelector(state=> state.counter);
  const isLogged = useSelector(state=> state.isLogged);
 

  return (
    <div className="App">
      <h1>Counter is {count} </h1>
      <button onClick={() => dispatch(increment(parseInt(document.getElementById("number").value)))}>+</button>
      <button onClick={() => dispatch(decrement(parseInt(document.getElementById("number").value)))}>-</button>
      <br/>
      <input id ="number" type = "number"/>
      {isLogged ? <h3>Valuable Information I shouldnt see</h3>:''}
    </div>
  );
}

export default App;
