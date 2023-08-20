import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import DeynamicMeals from "../../DynamicMeals/DeynamicMeals";

const AreaPage = () => {
  const meals = useLoaderData().meals;
  //   console.log(meals);
  const areaName = useLocation().pathname.replace("/area/", "");

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center py-5">
        Recipe Area: {areaName}
      </h2>
      <DeynamicMeals meals={meals}></DeynamicMeals>
    </div>
  );
};

export default AreaPage;
