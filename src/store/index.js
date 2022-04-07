import { configureStore, createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducer: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});

export const actions = countSlice.actions;
const store = configureStore({ reducer: countSlice.reducer });
export default store;
