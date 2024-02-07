// SearchResults.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");

    // Fetch data from your backend using the search query
    // Replace this with your actual API endpoint
    fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=96f649788834498491eb6d79edb89297`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.articles); // Accessing the 'articles' field
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  }, [location.search]);

  return (
    console.log(SearchResults)
    // <div>
        
    //   <h2>Search Results</h2>
    //   <ul>
    //     {searchResults.map((result) => (
    //       <li key={result.title}>{result.title}</li> // Rendering article titles
    //     ))}
    //   </ul>
    // </div>
  );
};

export default SearchResults;
