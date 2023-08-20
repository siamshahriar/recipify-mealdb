import React from "react";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Category = ({ each }) => {
  //   console.log(each);
  const { strCategory, idCategory, strCategoryDescription, strCategoryThumb } =
    each;

  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img src={strCategoryThumb} alt={strCategory} />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl text-center">{strCategory}</h2>
        <div className="card-action text-center h-full">
          <button className=" text-2xl relative top-[70%]">
            <Link to={`category/${strCategory}`}>
              <HiOutlineArrowCircleRight></HiOutlineArrowCircleRight>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
