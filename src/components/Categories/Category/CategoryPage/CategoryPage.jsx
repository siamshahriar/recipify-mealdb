import React, { useEffect, useState } from "react";
import Meals from "../../../Meals/Meals";
import { useLoaderData, useLocation } from "react-router-dom";
import axios from "axios";
import DeynamicMeals from "../../../DynamicMeals/DeynamicMeals";

const CategoryPage = () => {
  const meals = useLoaderData().meals;
  //   console.log(meals);

  const cataName = useLocation().pathname.replace("/category/", "");

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center py-5">
        Recipe Category: {cataName}
      </h2>
      <DeynamicMeals meals={meals}></DeynamicMeals>
    </div>
  );
};

export default CategoryPage;
