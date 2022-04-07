import "./App.css";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increaseCount = () => {
    dispatch({
      type: "INC",
    });
  };
  const decreaseCount = () => {
    dispatch({
      type: "DEC",
    });
  };
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
