import { useFormik } from "formik";
import React from "react";

function Signup() {
  var userSignupForm = useFormik({
    initialValues: {
      username: "",
      password: "",
      mobile: "",
      role: "customer",
    },
  });

  return (
    <div className="container">
      <h1>User Signup</h1>
      <form onSubmit={userSignupForm.handleSubmit}>
        <input type="text" {...userSignupForm.getFieldProps("username")} />
        <br />
        <input type="text" {...userSignupForm.getFieldProps("password")} />
        <br />
        <input type="text" {...userSignupForm.getFieldProps("mobile")} />
        <br />
        <button>User Signup</button>
      </form>
    </div>
  );
}

export default Signup;
