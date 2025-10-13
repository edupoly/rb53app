import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { signup } from "./userSlice";

function Signup() {
  let dispatch = useDispatch();
  let regForm = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(signup(values));
    },
  });
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={regForm.handleSubmit}>
        <input type="text" {...regForm.getFieldProps("username")} />
        <br />
        <input type="text" {...regForm.getFieldProps("password")} />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Signup;
