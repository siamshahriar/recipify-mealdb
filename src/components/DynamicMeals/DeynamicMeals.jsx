import Meal from "../Meals/Meal/Meal";

const DeynamicMeals = ({ meals, setRemovedNotifier }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-3">
      {meals?.map((each, index) => {
        return (
          <Meal
            key={index}
            each={each}
            setRemovedNotifier={setRemovedNotifier}
          ></Meal>
        );
      })}
    </div>
  );
};

export default DeynamicMeals;
