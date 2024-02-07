import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchData = ({ cat, searchQuery }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        let apiUrl = "";
        if (searchQuery) {
            apiUrl = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=96f649788834498491eb6d79edb89297`;
        } else {
            apiUrl = cat ? `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=96f649788834498491eb6d79edb89297`
                : "https://newsapi.org/v2/top-headlines?country=us&apiKey=96f649788834498491eb6d79edb89297";
        }
        try {
            const response = await axios.get(apiUrl);
            setData(response.data.articles);
        } catch (error) {
            setError("Error fetching data. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [cat, searchQuery]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container my-4">
            <h3><u>TOP HEADLINES</u></h3>
            <div className="container d-flex justify-content-center align-items-center flex-column my-3">
                {data && data.map((item, index) => (
                    <div key={index} className="container my-3 p-3" style={{ width: "600px", boxShadow: "2px 2px 10px silver", borderRadius: "10px" }}>
                        <h5 className="my-2">{item.title}</h5>
                        <img src={item.urlToImage} alt="Image Not Found" className="img-fluid" style={{ width: "auto%", height: "300px", objectFit: "cover" }} />
                        <p className="my-1">{item.content}</p>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">View More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FetchData;
