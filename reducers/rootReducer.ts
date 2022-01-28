import { combineReducers } from "@reduxjs/toolkit";
import CounterReducer from "./counterSlice";

const combinedReducers = combineReducers({
  counter: CounterReducer,
});

export default combinedReducers;
