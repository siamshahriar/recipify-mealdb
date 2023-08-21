import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import Home from "./components/Home/Home.jsx";
import CategoryPage from "./components/Categories/Category/CategoryPage/CategoryPage.jsx";
import AreaPage from "./components/Areas/AreaPage/AreaPage.jsx";
import MealDetails from "./components/Meals/MealDetails/MealDetails.jsx";
import Favourites from "./components/Favourites/Favourites.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:strCategory",
        element: <CategoryPage></CategoryPage>,
        loader: async ({ params }) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.strCategory}`
          );
        },
      },
      {
        path: "/area/:strArea",
        element: <AreaPage></AreaPage>,
        loader: async ({ params }) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.strArea}`
          );
        },
      },
      {
        path: "/meal/:idMeal",
        element: <MealDetails></MealDetails>,
        loader: async ({ params }) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`
          );
        },
      },
      {
        path: "/favourites",
        element: <Favourites></Favourites>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
