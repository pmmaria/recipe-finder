import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const RecipeDetail = () => {
  const [activeRecipe, setActiveRecipe] = useState([]);
  const location = useLocation();
  const stateRecipe = location.state.recipe;

  async function fetchData() {
    const req = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${stateRecipe}`
    );
    const response = await req.json();
    setActiveRecipe(response.meals[0]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center">{activeRecipe.strMeal}</h1>
      <img src={activeRecipe.strMealThumb} width="200px" />
      <h2>Instruccions</h2>
      <p>{activeRecipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetail;
