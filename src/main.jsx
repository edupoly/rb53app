import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";

import { store } from "./app/store";
import { Provider } from "react-redux";
import Todolist from "./Todolist.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/todolist",
        element: <Todolist></Todolist>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
