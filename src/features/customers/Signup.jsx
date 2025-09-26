import { useFormik } from "formik";
import React from "react";
import { useSignupMutation } from "../../services/userApi";

function Signup() {
  var [singupFn] = useSignupMutation();
  var userSignupForm = useFormik({
    initialValues: {
      username: "",
      password: "",
      number: "",
      role: "",
    },
    onSubmit: (values) => {
      singupFn(values).then((res) => console.log(res));
    },
  });

  return (
    <div className="container">
      <h1>User Signup</h1>
      <form onSubmit={userSignupForm.handleSubmit}>
        <input
          type="text"
          {...userSignupForm.getFieldProps("username")}
          placeholder="Username"
        />
        <br />
        <input
          type="text"
          {...userSignupForm.getFieldProps("password")}
          placeholder="password"
        />
        <br />
        <input
          type="text"
          {...userSignupForm.getFieldProps("number")}
          placeholder="Enter your Mobile number"
        />
        <br />
        <input
          type="text"
          {...userSignupForm.getFieldProps("email")}
          placeholder="Enter Email"
        />
        <br />
        <select name="role" id="" {...userSignupForm.getFieldProps("role")}>
          <option value={null} disabled selected>
            {" "}
            Please select the role
          </option>
          <option value="customer">Customer</option>
          <option value="movie owner">Movie Owner</option>
          <option value="theater owner">Theatre Owner</option>
        </select>
        <br />
        <button>User Signup</button>
      </form>
    </div>
  );
}

export default Signup;
