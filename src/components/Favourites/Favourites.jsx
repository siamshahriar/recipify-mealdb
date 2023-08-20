import React, { useEffect, useState } from "react";
import DeynamicMeals from "../DynamicMeals/DeynamicMeals";
import { getFromDB } from "../../addToDB/addToDB";

const Favourites = () => {
  const [meals, setMeals] = useState([]);
  const [removedNotifier, setRemovedNotifier] = useState(0);
  useEffect(() => {
    const favMeals = getFromDB();
    setMeals(favMeals);
  }, [removedNotifier]);

  //   console.log(meals);
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center py-5">Favourites</h2>
      <DeynamicMeals
        meals={meals}
        setRemovedNotifier={setRemovedNotifier}
      ></DeynamicMeals>
    </div>
  );
};

export default Favourites;
