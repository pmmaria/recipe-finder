import React, { Component } from "react";
import './app.css'
import CardCategories from "./CardCategories";
import Header from "./Header";
import RecipesList from "./RecipesList";
import Searchbar from "./Searchbar";
import { categoriesList } from "../data/categoriesList";


class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: [],
    }
  }

  handleSubmit = async (e) => {
    const recipeQuery = e.target.recipeQuery.value;
    e.preventDefault();

    //Get recipes from the API
    const apiCall = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${recipeQuery}`);
    const data = await apiCall.json();
    this.setState({ recipes: data.meals })
  }

  render() {
    return (
      <div>
        <Header />
        <CardCategories categoriesList={categoriesList} />
        <Searchbar handleSubmit={this.handleSubmit} label={"Search by ingredient... "} />
        <RecipesList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;