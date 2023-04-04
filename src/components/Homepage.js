/** @format */

import React, { useState } from "react";
import { useFilter } from "../Context/FilterContext";
import Card from "./Cards/Card";
import FilterSIdebar from "./FilterSIdebar/FilterSIdebar";
import Footer from "./LandingPage/Footer";
import Pagination from "./Pagination/Pagination";
import SearchBar from "./SearchBar/SearchBar";

const Homepage = () => {
  const [mode, setMode] = useState(
    () => localStorage.getItem("mode") || "light"
  );

  return (
    <div className={mode === "dark" ? "dark-mode" : "light-mode"}>
      {" "}
      <SearchBar />
      {/* <Card /> */}
      <FilterSIdebar />
    </div>
  );
};

export default Homepage;
