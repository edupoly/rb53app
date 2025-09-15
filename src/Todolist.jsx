import React, { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { alltodos } from "./todos";
const initialState = {
  todos: [...alltodos],
  newState: { title: "", status: false, id: uuidv4() },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTODO":
      return { ...state, todos: [...state.todos, { ...state.newState }] };
    case "UPDATENEWTODO":
      return {
        ...state,
        newState: { ...state.newState, title: action.payload },
      };
  }
};
function Todolist() {
  var [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Todolist</h1>
      <input
        type="text"
        onChange={(e) => {
          dispatch({ type: "UPDATENEWTODO", payload: e.target.value });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADDTODO" });
        }}
      >
        Add Todo
      </button>
      <ul>
        {state.todos.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default React.memo(Todolist);
