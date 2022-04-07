import { createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {
  var data = {};
  switch (action.type) {
    case "INC":
      //   data = { ...state };
      //   data.counter = data.counter + 1;
      //   return data;
      return { counter: state.counter++, ...state };
    case "DEC":
      //   data = { ...state };
      //   data.counter = data.counter - 1;
      //   return data;
      return { counter: state.counter--, ...state };
    default:
      return { ...state };
  }
};
const store = createStore(reducerFn);
export default store;
