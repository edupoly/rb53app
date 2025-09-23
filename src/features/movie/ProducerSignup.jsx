import { useFormik } from "formik";
import React from "react";

function ProducerSignup() {
  var producerForm = useFormik({
    initialValues: {
      username: "",
      password: "",
      mobile: "",
      role: "Producer",
    },
  });

  return (
    <div className="container">
      <h1>Producer Signup</h1>
      <form onSubmit={producerForm.handleSubmit}>
        <input type="text" {...producerForm.getFieldProps("username")} />
        <br />
        <input type="text" {...producerForm.getFieldProps("password")} />
        <br />
        <input type="text" {...producerForm.getFieldProps("mobile")} />
        <br />
        <button>Producer Signup</button>
      </form>
    </div>
  );
}

export default ProducerSignup;
