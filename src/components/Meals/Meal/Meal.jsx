import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbToolsKitchen, TbEye } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { removeFavItem } from "../../../addToDB/addToDB";
import { toast } from "react-hot-toast";

const Meal = ({ each, setRemovedNotifier }) => {
  const [meals, setMeals] = useState([]);
  const { idMeal, strMealThumb, strMeal, strCategory, strArea } = each;
  const strCategory2 = meals?.data?.meals[0]?.strCategory;
  const strArea2 = meals?.data?.meals[0]?.strArea;

  const pageName = useLocation().pathname.replace("/", "");

  const removedSuccess = () => toast.success("Items Removed !");

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((data) => setMeals(data));
  }, []);

  const handleRemove = (data) => {
    removeFavItem(data);
    removedSuccess();
    setRemovedNotifier(Math.floor(Math.random() * 100) + 1);
  };

  // console.log(each);
  return (
    <div className="card w-96 ease-in duration-100 hover:w-[420px] bg-base-100 shadow-xl drop-shadow-xl">
      <figure className="px-10 pt-10">
        <img src={strMealThumb} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{strMeal}</h2>

        <div className="card-actions my-2">
          <div className="badge badge-neutral">
            {strCategory ? strCategory : strCategory2}
          </div>
          <div className="badge badge-neutral">
            {strArea ? strArea : strArea2}
          </div>
        </div>
        <div className="card-actions mt-3">
          <Link to={`/meal/${idMeal}`} className="btn btn-primary">
            View Recipe
            <TbToolsKitchen></TbToolsKitchen>
          </Link>
          {pageName === "favourites" && (
            <button
              onClick={() => handleRemove(idMeal)}
              className="btn btn-error"
            >
              Remove <MdDeleteForever className="text-xl "></MdDeleteForever>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Meal;
