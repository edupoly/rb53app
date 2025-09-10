import React, { useState } from "react";
import {
  useAddTodoMutation,
  useLazyGetAllTodosQuery,
} from "../../services/todosapi";
import { useNavigate } from "react-router-dom";

function AddTodo() {
  var [addTodoFn] = useAddTodoMutation();
  var [getAllTodosFn] = useLazyGetAllTodosQuery();
  var [newTodo, setNewTodo] = useState({
    title: "",
    status: false,
    email: "",
  });
  var navigate = useNavigate();
  return (
    <div>
      <input
        type="text"
        name="title"
        onChange={(e) => {
          setNewTodo({ ...newTodo, title: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        name="status"
        onChange={(e) => {
          setNewTodo({ ...newTodo, status: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        name="email"
        onChange={(e) => {
          setNewTodo({ ...newTodo, email: e.target.value });
        }}
      />
      <br />
      <button
        onClick={() => {
          addTodoFn(newTodo).then(() => {
            getAllTodosFn();
            navigate("/todos");
          });
        }}
      >
        Add New Todo
      </button>
    </div>
  );
}

export default AddTodo;
