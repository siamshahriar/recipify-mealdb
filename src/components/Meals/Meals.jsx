import axios from "axios";
import React, { useEffect, useState } from "react";
import Meal from "./Meal/Meal";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((data) => setMeals(data));
  }, []);
  //   console.log(meals);
  return (
    <div className="flex flex-wrap justify-center items-center gap-3">
      {meals?.data?.meals?.map((each, index) => {
        return <Meal key={index} each={each}></Meal>;
      })}
    </div>
  );
};

export default Meals;
