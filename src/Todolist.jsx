import React from "react";
import { connect } from "react-redux";
function Todolist({ todoR: { todos }, dispatch }) {
  console.log("Todolist rendered");
  return (
    <div className="border border-success border-5 p-2 m-2">
      <h1>Todolist</h1>
      <input type="text" id="d1" />
      <button
        onClick={() => {
          dispatch({
            type: "ADD_TODO",
            newtodo: document.getElementById("d1").value,
          });
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo, i) => {
          return <li key={i}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default connect((store) => {
  return store;
})(Todolist);
