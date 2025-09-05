import React from "react";
import { connect } from "react-redux";
import { addTodoActionCreator } from "./store/actionCreators";
function Todolist({ todos, addTodo }) {
  console.log("Todolist rendered");
  return (
    <div className="border border-success border-5 p-2 m-2">
      <h1>Todolist</h1>
      <input type="text" id="d1" />
      <button
        onClick={() => {
          addTodo(document.getElementById("d1").value);
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
function mapStateToProps(state) {
  return state.todoR;
}
function mapDispatchToProps(dispatch) {
  return {
    addTodo: (nt) => {
      dispatch(addTodoActionCreator(nt));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
