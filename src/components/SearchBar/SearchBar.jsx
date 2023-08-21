import axios from "axios";
import React, { useEffect, useState } from "react";
import DeynamicMeals from "../DynamicMeals/DeynamicMeals";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const [checkStartswith, setCheckStartswith] = useState([]);

  const meals = checkStartswith?.data?.meals?.filter(
    (each) => each.strMeal && each.strMeal.toLowerCase().startsWith(inputValue)
  );

  console.log(inputValue);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    if (inputValue) {
      axios.get(apiUrl).then((data) => setCheckStartswith(data));
    }
  }, [inputValue]);
  return (
    <div className="">
      <h2 className="text-2xl font-semibold text-center my-7">Search Meal</h2>
      <div className="form-control w-72 mx-auto mb-10">
        <input
          type="text"
          placeholder="Search Meal"
          className="input input-bordered w-full md:w-auto"
          onChange={handleInputChange}
        />
      </div>
      {meals?.length !== 25 && <DeynamicMeals meals={meals}></DeynamicMeals>}
    </div>
  );
};

export default SearchBar;
