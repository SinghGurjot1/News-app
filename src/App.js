import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Home from "./Pages/Home";
import FetchData from "./components/FetchData";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResullts";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* Define routes for different categories */}
        <Route path="/general" element={<FetchData cat="general" />} />
        <Route path="/Business" element={<FetchData cat="Business" />} />
        <Route path="/Entertainment" element={<FetchData cat="Entertainment" />} />
        <Route path="/Health" element={<FetchData cat="Health" />} />
        <Route path="/Science" element={<FetchData cat="Science" />} />
        <Route path="/Sports" element={<FetchData cat="Sports" />} />
        <Route path="/Technology" element={<FetchData cat="Technology" />} />
        
        
        {/* Route for search results */}
        <Route path="/search" element={<FetchData cat ={SearchResults} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
