const initialState = {
  todos: ["get house", "pay bills", "goto goa", "play tennis"],
};
export function todoReducer(state = initialState, action) {
  if (action.type === "ADD_TODO") {
    return { ...state, todos: [...state.todos, action.newtodo] };
  }
  return state;
}
