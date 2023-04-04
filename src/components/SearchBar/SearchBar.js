/** @format */

import React, { useState } from "react";
import Card from "../Cards/Card";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchName, setSearchName] = useState("");

  return (
    <div className="SearchBar">
      <input
        type="text"
        className="sidebar_input "
        placeholder="Search Favorite Charecter"
        onChange={(e) => {
          setSearchName(e.target.value);
        }}
      />
      <button className="searchbar-button">Search</button>
      <>
        <Card searchTerm={searchName} />
      </>
    </div>
  );
};

export default SearchBar;
