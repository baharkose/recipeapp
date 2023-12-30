import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const RecipeContext = createContext();

export const useRecipeContext = () => {
  return useContext(RecipeContext);
};
const RecipeContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_RECIPE_KEY;
  const APP_ID = process.env.REACT_APP_RECIPE_ID;
  const meal = "breakfast";
  const query = "pizza";

  const [search, setSearch] = useState({
    query: "",
    meal: "breakfast",
  });

 

  const FEATURED_API = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}&mealType=${meal}`;

  const getRecipes = () => {
    setLoading(true);
    axios(FEATURED_API)
      .then((res) => setRecipes(res.data.hits))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };
  // - ilk açılışta gelmesi için
  useEffect(() => {
    getRecipes();
  }, [setSearch]);
  const values = { recipes, loading, search, setSearch };

  return (
    <RecipeContext.Provider value={values}>{children}</RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
