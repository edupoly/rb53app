import { createContext, useReducer } from "react";
import { alltodos } from "./todos";
export const intitialState = {
  todos: [...alltodos],
};
function todoReducer(state, action) {
  switch (action.type) {
    case "ADDTODO":
      return { ...state, todos: [...state.todos, action.payload] };
  }
}

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, intitialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
