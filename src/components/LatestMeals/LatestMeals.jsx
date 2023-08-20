import axios from "axios";
import React, { useEffect, useState } from "react";
import Meals from "../Meals/Meals";

const LatestMeals = () => {
  //   const [meals, setMeals] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get("https://www.themealdb.com/api/json/v1/1/categories.php")
  //       .then((data) => setMeals(data));
  //   }, []);
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center my-7">Latest Meals</h2>
      <div>
        <Meals></Meals>
      </div>
    </div>
  );
};

export default LatestMeals;
