import { useState, useEffect, useRef } from "react";
import useDebounce from "../Hooks/useDebounce";

function Search() {
  const [keyword, setKeyword] = useState("");
  const [fruitSuggestions, setFruitSuggestions] = useState([]);
  const suggestionContainerRef = useRef(null);
  const debouncedFilterFruits = useRef(null);
  const [page, setPage] = useState(1); // Current page number
  const [totalPages, setTotalPages] = useState();
  const pageSize = 5; // Number of items per page
  const [isFetching, setIsFetching] = useState(false); // Track API fetching state

  const filterFruits = async (text, pageNumber) => {
    if (totalPages && pageNumber > totalPages) {
      return;
    }
    setIsFetching(true); // Set fetching state to true
    const response = await fetch(
      `http://localhost:4001/api/fruits?filter=${text}&page=${pageNumber}&size=${pageSize}`
    );
    const data = await response.json();
    setTotalPages(data.totalPages);
    setFruitSuggestions((prevSuggestions) => [
      ...prevSuggestions,
      ...data.data,
    ]); // Append new suggestions to existing ones
    setIsFetching(false); // Set fetching state to false after fetching is complete
  };

  debouncedFilterFruits.current = useDebounce(filterFruits, 1000);

  const handleSuggestions = (val) => {
    setFruitSuggestions([]);
    setKeyword(val);
    setPage(1); // Reset page to 1 when keyword changes
    if (val) {
      debouncedFilterFruits.current(val, 1); // Fetch first page of suggestions
    }
  };

  const handleScroll = () => {
    const container = suggestionContainerRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollTop + clientHeight >= scrollHeight && !isFetching) {
        // User has scrolled to the bottom and fetching is not in progress
        setPage((prevPage) => prevPage + 1); // Increment page number
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (keyword && page > 1) {
        await debouncedFilterFruits.current(keyword, page); // Fetch next page of suggestions
      }
    };

    fetchData();
  }, [page, keyword]);

  useEffect(() => {
    // Attach scroll event listener to the suggestion container
    const container = suggestionContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      // Remove scroll event listener on component unmount
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <>
      <div className="pl-5">
        Search:{" "}
        <input
          className="search-input"
          placeholder="Search"
          value={keyword}
          onChange={(e) => handleSuggestions(e.target.value)}
        />
      </div>
      {!!(fruitSuggestions.length && keyword) && (
        <section
          ref={suggestionContainerRef}
          className="absolute overflow-y-scroll max-h-20"
        >
          {fruitSuggestions.map((fruit, i) => (
            <p
              key={i}
              className="ml-20 bg-white w-40 relative"
              onClick={(e) => {
                setKeyword(fruit);
                setFruitSuggestions([]);
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
