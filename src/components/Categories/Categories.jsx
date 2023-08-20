import axios from "axios";
import React, { useEffect, useState } from "react";
import Category from "./Category/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((data) => setCategories(data));
  }, []);


  return (
    <div>
      <h2 className="text-2xl font-semibold text-center my-7">Categories</h2>

      <div className="w-4/5 mx-auto overflow-x-scroll">
        <div className="flex space-x-4 p-4">
          {categories?.data?.categories.map((each, index) => (
            <div key={index}>
              <Category key={index} each={each}></Category>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="flex flex-row flex-wrap gap-6 justify-center items-center ">
        {categories?.data?.categories.map((each, index) => (
          <Category key={index} each={each}></Category>
        ))}
      </div> */}
    </div>
  );
};

export default Categories;
