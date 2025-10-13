import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: "todolistitems",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      var allTodos = JSON.parse(window.localStorage.getItem("todos")) || [];
    },
  },
});
