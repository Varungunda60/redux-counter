import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increaseCount = () => {
    dispatch(actions.increment);
  };
  const decreaseCount = () => {
    dispatch(actions.decrement());
  };
  console.log(actions);
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}> Decrease</button>
    </div>
  );
}

export default App;
