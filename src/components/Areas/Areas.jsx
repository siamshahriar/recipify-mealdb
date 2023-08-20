import axios from "axios";
import React, { useEffect, useState } from "react";
import Area from "./Area/Area";

const Areas = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((data) => setAreas(data));
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center my-7">Types</h2>
      <div className="w-4/5 mx-auto flex flex-wrap gap-3 justify-center">
        {areas?.data?.meals?.map((each, index) => (
          <Area key={index} each={each}></Area>
        ))}
      </div>
    </div>
  );
};

export default Areas;
