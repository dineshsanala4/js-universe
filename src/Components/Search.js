import React, { useState } from "react";
import useDebounce from "../Hooks/useDebounce";

function Search() {
  const [keyword, setkeyword] = useState("");

  const [fruitSuggestions, setfruitSuggestions] = useState([]);

  const filterFruits = async (text) => {
    const response = await fetch(
      "http://localhost:4001/api/fruits?filter=" + text
    );

    let suggestions = await response.json();

    setfruitSuggestions(suggestions);
  };

  const debouncedFilterFruits = useDebounce(filterFruits, 1000);

  const handleSuggestions = (val) => {
    setkeyword(val);
    if (val) {
      debouncedFilterFruits(val);
    }
  };

  return (
    <>
      <div className="pl-5">
        Search:{" "}
        <input
          placeholder="Search"
          value={keyword}
          onChange={(e) => handleSuggestions(e.target.value)}
        />
      </div>
      {!!(fruitSuggestions.length && keyword) && (
        <section className="absolute">
          {fruitSuggestions.map((fruit, i) => (
            <p
              key={i}
              className="ml-20 bg-white w-40 relative"
              onClick={(e) => {
                setkeyword(fruit);
                setfruitSuggestions([]);
              }}
            >
              {fruit}
            </p>
          ))}
        </section>
      )}
    </>
  );
}

export default Search;
