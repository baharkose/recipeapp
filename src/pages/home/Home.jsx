import React from "react";
import Header from "../../components/header/Header";
import { useRecipeContext } from "../../context/RecipeContext";

const posts = [
  {
    title: "What is SaaS? Software as a Service Explained",
    desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
  {
    title: "A Quick Guide to WordPress Hosting",
    desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
    img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
  {
    title: "7 Promising VS Code Extensions Introduced in 2022",
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
  {
    title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
    desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational.",
    img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
];

const Home = () => {
  const { recipes } = useRecipeContext();

  // Log the recipes to see their structure
  console.log(recipes);

  return (
    <>
      <Header />
      <section>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {recipes.map((item, key) => (
              <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                <div>
                  <img
                    src={item.recipe.image}
                    loading="lazy"
                    alt={item.recipe.label}
                    className="w-full rounded-lg"
                  />
                  <div className="mt-3 space-y-2">
                    <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                      {item.recipe.ingredientLines.join(', ')}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};


export default Home;
