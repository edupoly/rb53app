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
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/userSignup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/theatreSignup",
    element: <TheatreSignup></TheatreSignup>,
  },
  {
    path: "/producerSignup",
    element: <ProducerSignup></ProducerSignup>,
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
