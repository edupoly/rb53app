import React, { useContext } from "react";
import { TodoContext } from "./todolist/TodoContext";

function Navbar() {
  var { todos } = useContext(TodoContext);
  return (
    <div className="border border-2 px-5 align-items-center m-2 bg-success-subtle d-flex justify-content-between">
      <h1>Navbar</h1>
      <h2>Todos:{todos.length}</h2>
    </div>
  );
}

export default Navbar;
