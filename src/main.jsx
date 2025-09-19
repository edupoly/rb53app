import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Home = lazy(() => import("./Home.jsx"));
const Aboutus = lazy(() => "./Aboutus.jsx");
const Courses = lazy(() => "./Courses.jsx");
import CategoryProducts from "./CategoryProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        {" "}
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/home",
        element: <Suspense fallback={<h1>Loading....</h1>}><Home></Home> </Suspense>
       ,
      },
      {
        path: "/aboutus",
        element: <Aboutus></Aboutus>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/category/:cslug",
        element: <CategoryProducts></CategoryProducts>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
