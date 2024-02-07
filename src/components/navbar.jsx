import React, {useState} from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search action with searchQuery
    console.log("Search query:", searchQuery);
    if (searchQuery.trim() !== "") {
      window.location.href = `/${encodeURIComponent(searchQuery)}`;
    };
    // You can add further logic here to handle the search action, such as redirecting to a search results page

    
};
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/">News Hub</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/general">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/technology">Technology</Link>
        </li>
        </ul>
        <form className ="d-flex" role = "search" onSubmit={handleSubmit}>
          <input className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value = {searchQuery}
          onChange={handleInputChange}
          />
          <button className="btn btn-outline-success" type="submit">
            Submit
          </button>
        </form>
    </div>
   </div>
</nav>
        </div>
    );
};