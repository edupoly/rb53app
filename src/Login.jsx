import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./userSlice";

function Login() {
  var dispatch = useDispatch();
  let loginForm = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginForm.handleSubmit}>
        <input type="text" {...loginForm.getFieldProps("username")} />
        <br />
        <input type="text" {...loginForm.getFieldProps("password")} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
