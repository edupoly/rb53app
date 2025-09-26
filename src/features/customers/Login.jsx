import { useFormik } from "formik";
import { useLoginMutation } from "../../services/userApi";
import { useDispatch } from "react-redux";
import { updateUserDetails } from "./userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  var [loginFn] = useLoginMutation();
  var dispatch = useDispatch();
  var navigate = useNavigate();
  var loginForm = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      loginFn(values).then(({ data }) => {
        if (data.message === "Login successful") {
          window.localStorage.setItem("token", data.token);
          window.localStorage.setItem("username", data.user.username);
          window.localStorage.setItem("email", data.user.email);
          window.localStorage.setItem("number", data.user.number);
          window.localStorage.setItem("role", data.user.role);
          dispatch(
            updateUserDetails({
              username: data.user.username,
              mobile: data.user.number,
              email: data.user.email,
              role: data.user.role,
              token: data.token,
            })
          );
          navigate("/");
        }
      });
    },
  });

  return (
    <div>
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
