import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Home = lazy(() => import("./Home.jsx"));
const Aboutus = lazy(() => import("./Aboutus.jsx"));
const Courses = lazy(() => import("./Courses.jsx"));
import CategoryProducts from "./CategoryProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Home></Home>
          </Suspense>
        ),
      },
      {
        path: "/aboutus",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Aboutus></Aboutus>
          </Suspense>
        ),
      },
      {
        path: "/courses",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Courses></Courses>
          </Suspense>
        ),
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
