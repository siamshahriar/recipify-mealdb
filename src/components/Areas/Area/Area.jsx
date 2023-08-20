import React from "react";
import { Link } from "react-router-dom";

const Area = ({ each }) => {
  const { strArea } = each;

  let color;
  if (strArea.length === 4) {
    color = "btn-neutral";
  } else if (strArea.length === 5) {
    color = "btn-primary";
  } else if (strArea.length === 6) {
    color = "btn-secondary";
  } else if (strArea.length === 7) {
    color = "btn-accent";
  } else if (strArea.length === 8) {
    color = "btn-ghost";
  } else if (strArea.length === 9) {
    color = "btn-lin";
  } else {
    color = "";
  }
  return (
    <Link to={`area/${strArea}`} className={`btn btn-active ${color}`}>
      {strArea}
    </Link>
  );
};

export default Area;
