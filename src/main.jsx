import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import TheatreSignup from "./features/theatre/TheatreSignup.jsx";
import ProducerSignup from "./features/movie/ProducerSignup.jsx";
import Signup from "./features/customers/Signup.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Login from "./features/customers/Login.jsx";
import AddMovie from "./features/movie/AddMovie.jsx";
import Home from "./components/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addMovie",
        element: <AddMovie></AddMovie>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
