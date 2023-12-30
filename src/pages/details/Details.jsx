import React from "react";
import { useParams } from "react-router-dom";
import { useRecipeContext } from "../../context/RecipeContext";

const Details = () => {
  const { recipes } = useRecipeContext();
  const { label } = useParams();
  const decodedLabel = decodeURIComponent(label); // Decode the label from the URL
  const recipeDetail = recipes.find(
    (recipe) => recipe.recipe.label === decodedLabel
  );

  // Handle loading or no data cases
  if (!recipeDetail) {
    return <div>Loading or recipe not found...</div>;
  }

  const { image, ingredientLines } = recipeDetail.recipe;

  return (
    <div className="container mx-auto md:px-6 w-[60%]  mt-6">
      <section>
        <h1 className="mb-6 text-3xl font-bold text-center">{decodedLabel}</h1>
        <div className="flex justify-center gap-8 border-red-400">
          <div className="flex justify-center">
            <img
              src={image}
              className="mb-6 w-full rounded-lg shadow-lg"
              alt={decodedLabel}
            />
          </div>
          <div className="w-[45%]">
            <h2 className="font-semibold text-[1.3rem] mb-2">Ingredients</h2>
            <ul>
              {ingredientLines.map((line, index) => (
                <li className="list-disc" key={index}>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
