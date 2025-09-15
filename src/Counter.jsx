import React, { useReducer } from "react";
const initialState = {
  count: 0,
};
function reducer(state = initialState, action) {
  //   if (action.type === "INC") {
  //     return { ...state, count: state.count + 1 };
  //   }
  //   if (action.type === "DEC") {
  //     return { ...state, count: state.count - 1 };
  //   }
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + 1 };
    case "DEC":
      return { ...state, count: state.count - 1 };
  }
}
function Counter() {
  var [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="border border-2 border-info m-2 p-2">
      <h1>Counter:{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INC" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DEC" });
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
// state,action,UI
