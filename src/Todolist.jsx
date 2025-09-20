import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

function Todolist() {
  var {
    state: { todos },
  } = useContext(TodoContext);
  console.log(todos);
  return (
    <div>
      <h1>Todolist</h1>
      <ul>
        {todos.map((todo) => {
          return <li>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
