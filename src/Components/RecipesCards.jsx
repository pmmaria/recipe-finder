import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const RecipesCards = ({ recipes }) => {
  return (
    <div className="recipe-cards">
      <MDBRow className="row-cols-2 row-cols-md-6">
        {recipes.map((recipe, i) => {
          return (
            <MDBCol className="p-3" key={recipe.idMeal}>
              <MDBCard className="h-100">
                <MDBCardImage
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  position="top"
                  className="recipe-img"
                />
                <MDBCardBody className="card-body">
                  <MDBCardTitle className="fs-6 pb-1 pt-1">
                    {recipe.strMeal.length < 15
                      ? `${recipe.strMeal}`
                      : `${recipe.strMeal.substring(0, 15)}...`}
                  </MDBCardTitle>
                  <MDBBtn size="sm" outline rounded color="danger">
                    <Link
                      to={`/recipe/${recipe.idMeal}`}
                      state={{ recipe: recipe.idMeal }}
                    >
                      View Recipe
                    </Link>
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </div>
  );
};

export default RecipesCards;
