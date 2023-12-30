import React, { useContext, useState } from "react";
import { useRecipeContext } from "../../context/RecipeContext";

const Header = () => {
  // const [search, setSearch] = useState({
  //   query: "",
  //   meal: "breakfast",
  // });

  const {search, setSearch} = useRecipeContext()

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log(search);
    

  };
  return (
    <>
      {/* TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com */}
      <div className=" mt-9 w-[70%] m-auto">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
            Latest recipe posts
          </h1>
          <p className="text-gray-600 mb-2">
            Recipes that are loved by the community. Updated every hour.
          </p>
        </div>
        <div className="relative mb-4 flex w-full flex-wrap items-stretch justify-center">
          <input
            type="search"
            className="relative m-0 -mr-0.5 border border-blue-600 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
            name="query"
            onChange={handleChange}
          />
          <select
            className="relative z-[2] rounded-r border border-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            name="meal"
            onChange={handleChange}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            <option value="teatime">Teatime</option>
          </select>
          {/*Search button*/}
          <button
            className="relative z-[2] flex items-center rounded-r bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-init=""
            data-te-ripple-color="light"
            onClick={handleSubmit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
