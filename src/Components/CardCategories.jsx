import React from "react";
import Card from "./Card";

const CardCategories = ({ categoriesList }) => {
  return (
    <div className="container" id="recipes">
      <h2 className="fs-4 mt-3 text-center">Explore the categories</h2>
      <div className="category-container d-flex flex-wrap text-center justify-content-center">
        {categoriesList.map((category, i) => {
          return (
            <Card
              key={i}
              title={categoriesList[i].title}
              src={categoriesList[i].image}
              alt={categoriesList[i].title}
              button="View"
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardCategories;
