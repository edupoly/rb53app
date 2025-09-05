import React from "react";
import { connect } from "react-redux";
function Counter({ count, inc, dec, reset }) {
  console.log("Counter Rendered");
  return (
    <div className="border border-5 p-2 m-2">
      <h1>Counter:{count}</h1>
      <button
        onClick={() => {
          inc();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dec();
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
}
function mapStateToProps(state) {
  return state.cntR;
}
function mapDispatchToProps(dispatch) {
  return {
    inc: () => {
      dispatch({ type: "INC" });
    },
    dec: () => {
      dispatch({ type: "DEC" });
    },
    reset: () => {
      dispatch({ type: "RESET" });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
