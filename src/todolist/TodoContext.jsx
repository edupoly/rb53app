import { createContext, useReducer } from "react";

const initialState = {
  todos: ["abcs", "sdfu", "xcmvnfd"],
};
function reducer(state, action) {
  switch (action.type) {
    case "ADDTODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "DELETETODO":
      var temp = [...state.todos];
      temp.splice(action.payload, 1);
      return { ...state, todos: [...temp] };
  }
}
export const TodoContext = createContext("todoCtxt");
function TodoProvider({ children }) {
  var [state, dispatch] = useReducer(reducer, initialState);
  function addTodo(ntd) {
    dispatch({
      type: "ADDTODO",
      payload: ntd,
    });
  }
  function deleteTodo(index) {
    dispatch({
      type: "DELETETODO",
      payload: index,
    });
  }
  return (
    <TodoContext.Provider value={{ todos: state.todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
export default TodoProvider;
