import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaYoutube, FaCircleInfo, FaRegBookmark } from "react-icons/fa6";
import { addToDB } from "../../../addToDB/addToDB";
import { toast } from "react-hot-toast";

const MealDetails = () => {
  const meals = useLoaderData();
  const meal = meals?.meals[0];
  //   console.log(meal);
  const bookAdded = () => toast.success("Added to Favourites !");
  const notify = () => toast.error("Already in Favourites !");
  const {
    strArea,
    strCategory,
    strInstructions,
    strMeal,
    strMealThumb,
    strSource,
    strYoutube,
  } = meal;
  //   console.log(strCategory, strArea, strTags, strYoutube, strSource);
  const instructionSteps = strInstructions.split("\n");
  //   console.log(instructionSteps);

  const {
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
  } = meal;

  const ingredients = [
    { strIngredient: strIngredient1, strMeasure: strMeasure1 },
    { strIngredient: strIngredient2, strMeasure: strMeasure2 },
    { strIngredient: strIngredient3, strMeasure: strMeasure3 },
    { strIngredient: strIngredient4, strMeasure: strMeasure4 },
    { strIngredient: strIngredient5, strMeasure: strMeasure5 },
    { strIngredient: strIngredient6, strMeasure: strMeasure6 },
    { strIngredient: strIngredient7, strMeasure: strMeasure7 },
    { strIngredient: strIngredient8, strMeasure: strMeasure8 },
    { strIngredient: strIngredient9, strMeasure: strMeasure9 },
    { strIngredient: strIngredient10, strMeasure: strMeasure10 },
  ].filter((each) => each.strIngredient !== "");

  const handleAddToFav = (data) => {
    const addValue = addToDB(data);
    // console.log(addValue);
    if (addValue) {
      notify();
    } else {
      bookAdded();
    }
  };

  return (
    <div className="xl:px-72 lg:px-52 md:px-36 px-20 py-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex flex-col items-center justify-center">
          <img
            className="object-cover w-full rounded-lg mb-4"
            src={strMealThumb}
            alt=""
          />
          <p className="text-2xl font-semibold text-center mb-4">{strMeal}</p>
          <div className="mb-4">
            <Link to={`/area/${strArea}`} className="badge badge-neutral me-2">
              {strArea}
            </Link>
            <Link
              to={`/category/${strCategory}`}
              className="badge badge-neutral"
            >
              {strCategory}
            </Link>
          </div>
          <div>
            <Link
              to={strYoutube}
              rel="noreferrer"
              target={"_blank"}
              className="btn btn-error me-3"
            >
              Watch on Youtube <FaYoutube className="text-xl"></FaYoutube>{" "}
            </Link>
            <Link
              to={strSource}
              rel="noreferrer"
              target={"_blank"}
              className="btn btn-info"
            >
              Source <FaCircleInfo className="text-lg"></FaCircleInfo>
            </Link>
          </div>
          <button
            onClick={() => handleAddToFav(meal)}
            className="btn btn-group mt-3"
          >
            Add to favourites <FaRegBookmark></FaRegBookmark>{" "}
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="table bg-base-200 ">
            {/* head */}
            <thead>
              <tr className="text-xl">
                <th>Ingredients</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {ingredients.map((each, index) => (
                <tr key={index}>
                  <td>{each.strIngredient && each.strIngredient}</td>
                  <td>{each.strMeasure && each.strMeasure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <p className="text-xl font-medium mb-3 underline">Instructions:</p>
          <ol>
            {instructionSteps.map((each, index) => (
              <li key={index}>{each}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
