import React from "react";
import { useSelector } from "react-redux";
import lang from "../../Utils/languages";

function GPTSearch() {
  const language = useSelector((state) => state.gptSearch.language);
  // console.log(language, "language");
  // console.log(lang[language]?.placeholder, "file");

  return (
    <div className={`flex-grow flex justify-center items-center bg-custom-bg`}>
      <form className="flex gap-2 justify-center items-center w-full">
        <input
          type="text"
          placeholder={lang[language]?.placeholder}
          className="px-4 py-2 border border-cyan-900 text-sm rounded w-1/2"
        />
        <button className="px-3 py-2 text-sm rounded bg-red-600 text-white">
          {lang[language]?.search}
        </button>
      </form>
    </div>
  );
}

export default GPTSearch;
