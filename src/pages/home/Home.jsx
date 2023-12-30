import React from "react";
import Header from "../../components/header/Header";
import { useRecipeContext } from "../../context/RecipeContext";
import { useState } from "react";
import mainP from "../../assets/main.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { recipes, search } = useRecipeContext();
  const navigate = useNavigate();

  // Log the recipes to see their structure
  console.log(recipes);

  const [isHovered, setIsHovered] = useState(false);

  const normalStyle = {
    padding: "1rem",
    textAlign: "center",
    boxShadow: "0 2px 10px 0 rgba(0,0,0,0.1)",
    transition: "box-shadow 0.5s",
    cursor: "pointer",
  };

  const hoverStyle = {
    ...normalStyle,
    boxShadow: "0 0 10px 0 lightyellow",
  };

  return (
    <div>
      <Header className="z-50" />
      {!search.query ? (
        <div className="flex justify-center">
          <img
            src={mainP}
            className="mt-56 sm:mt-0 w-[70%] h-auto absolute top-[10rem]  z-[-1]"
            alt="Main Presentation"
          />
        </div>
      ) : (
        <section>
          <div className="max-w-screen-xl mx-auto px-4 md:px-8 ">
            <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {recipes.map((item, key) => (
                <li
                  className="w-full mx-auto group sm:max-w-sm"
                  key={key}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={isHovered ? hoverStyle : normalStyle}
                  onClick={() => navigate("/details/" + encodeURIComponent(item.recipe.label))}
                >
                  <div>
                    <img
                      src={item.recipe.image}
                      loading="lazy"
                      alt={item.recipe.label}
                      className="w-full rounded-lg"
                    />

                    <div className="mt-3 space-y-2">
                      <h3 className="text-center line-clamp-1">
                        {item.recipe.label}
                      </h3>
                      <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800 line-clamp-3">
                        {item.recipe.ingredientLines.join(", ")}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
