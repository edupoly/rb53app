import React, { useState, useRef, useEffect } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const tref = useRef();
  const bref = useRef();
  function addTodo() {
    const v = text.trim();

    const newTodo = {
      id: Date.now().toString(),
      text: v,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setText("");
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }
  function checkEnter(ev) {
    if (ev.key === "Enter") {
      bref.current.focus();
    }
  }
  useEffect(() => {
    tref.current.focus();
  }, []);
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-xl shadow">
      <b className="text-xl block mb-4">Simple Todo List</b>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={(e) => {
          checkEnter(e);
        }}
        placeholder="Add a task"
        className="flex-1 p-2 border rounded"
        ref={tref}
      />
      <button
        type="submit"
        className="px-3 py-2 bg-slate-800 text-white rounded"
        onClick={() => {
          addTodo();
        }}
        ref={bref}
      >
        Add
      </button>

      <ul className="space-y-2">
        {todos.length === 0 && (
          <li className="text-gray-400 text-sm">No todos yet</li>
        )}

        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-2 border rounded"
          >
            <label className="flex items-center gap-2 flex-1">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span
                className={todo.completed ? "line-through text-gray-500" : ""}
              >
                {todo.text}
              </span>
            </label>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
