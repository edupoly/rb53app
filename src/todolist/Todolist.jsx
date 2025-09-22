import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

function Todolist() {
  var { todos, addTodo, deleteTodo } = useContext(TodoContext);
  var [newtodo, setnewtodo] = useContext("");
  console.log(todos);
  return (
    <div className="border border-2 border-info m-2 p-2">
      <h1>Todolist</h1>
      <input
        type="text"
        id="d1"
        onChange={(e) => {
          setnewtodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo(newtodo);
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo, i) => {
          return (
            <li>
              {todo}
              <button
                onClick={() => {
                  deleteTodo(i);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
