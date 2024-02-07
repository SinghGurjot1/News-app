import React, { useState, useEffect } from "react";
import axios from "axios";
import FetchData from "./FetchData";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent form submission

        try {
            setIsLoading(true);
            setError(null);

            // Fetch data from the API based on the search query
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=96f649788834498491eb6d79edb89297`);

            // Set search results
            setSearchResults(response.data.articles);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchQuery} 
                    onChange={handleInputChange} 
                />
                <button type="submit">Search</button>
            </form>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!isLoading && searchResults.length > 0 && <FetchData data={searchResults} />}
        </div>
    );
};

export default SearchBar;
