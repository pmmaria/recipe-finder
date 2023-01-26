import React, { Component } from "react";
import './app.css'
import CardCategories from "./Components/CardCategories";
import Header from "./Components/Header";
import RecipesCards from "./Components/RecipesCards";
import Searchbar from "./Components/Searchbar";
import { categoriesList } from "./Components/categoriesList";


class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: [],
    }
  }

  handleSubmit = async (e) => {
    const recipeQuery = e.target.elements.recipeQuery.value;
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
        <RecipesCards recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;