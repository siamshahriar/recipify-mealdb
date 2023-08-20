import React from "react";
import Categories from "../Categories/Categories";
import Areas from "../Areas/Areas";
import LatestMeals from "../LatestMeals/LatestMeals";

const Home = () => {
  return (
    <div>
      <Categories></Categories>
      <Areas></Areas>
      <LatestMeals></LatestMeals>
    </div>
  );
};

export default Home;
