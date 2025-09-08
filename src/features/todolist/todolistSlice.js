import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: ["get veggies", "pay bills", "goto goa", "clean car"],
};

export const todolistSlice = createSlice({
  name: "TodoListSlice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});
export const { addTodo } = todolistSlice.actions;
export default todolistSlice.reducer;
