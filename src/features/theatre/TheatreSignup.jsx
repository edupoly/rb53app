import { useFormik } from "formik";
import React from "react";

function TheatreSignup() {
  var theatreForm = useFormik({
    initialValues: {
      username: "",
      password: "",
      mobile: "",
      role: "TheatreOwner",
    },
  });

  return (
    <div className="container">
      <h1>TheatreSignup</h1>
      <form onSubmit={theatreForm.handleSubmit}>
        <input type="text" {...theatreForm.getFieldProps("username")} />
        <br />
        <input type="text" {...theatreForm.getFieldProps("password")} />
        <br />
        <input type="text" {...theatreForm.getFieldProps("mobile")} />
        <br />
        <button>Signup Theatre</button>
      </form>
    </div>
  );
}

export default TheatreSignup;
