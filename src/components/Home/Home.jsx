import React from "react";
import Categories from "../Categories/Categories";
import Areas from "../Areas/Areas";
import LatestMeals from "../LatestMeals/LatestMeals";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  return (
    <div>
      <SearchBar></SearchBar>
      <Categories></Categories>
      <Areas></Areas>
      <LatestMeals></LatestMeals>
    </div>
  );
};

export default Home;
