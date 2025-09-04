import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { todoReducer } from "./todoReducer";
var reducer = combineReducers({ cntR: counterReducer, todoR: todoReducer });
var store = createStore(reducer);
export default store;
