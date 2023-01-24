import React from "react";
import Card from "./Card";

const CardCategories = ({ recipes }) => {
  return (
    <div className="container">
      <div className="category-container d-flex flex-wrap text-center justify-content-center">
        {recipes.map((recipe, i) => {
          return (
            <Card
              key={recipes[i].idMeal}
              title={recipes[i].strMeal}
              src={recipes[i].strMealThumb}
              alt={recipes[i].strMeal}
              button="View Recipe"
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardCategories;
