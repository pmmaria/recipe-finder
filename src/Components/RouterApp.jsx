import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import RecipeDetail from "./RecipeDetail";

const RouterApp = () => {
  return (
    <Routes>
      <Route exact path="/recipe-finder" element={<App />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
    </Routes>
  );
};

export default RouterApp;
