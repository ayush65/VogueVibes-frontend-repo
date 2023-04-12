/** @format */

import React, { useState } from "react";
import { useFilter } from "../Context/FilterContext";
import Card from "./Cards/Card";
import FilterSIdebar from "./FilterSIdebar/FilterSIdebar";
import Footer from "./LandingPage/Footer";
import Pagination from "./Pagination/Pagination";
import SearchBar from "./SearchBar/SearchBar";

const Homepage = () => {
  return (
    <div>
      {" "}
      <SearchBar />
      {/* <Card /> */}
      <FilterSIdebar />
    </div>
  );
};

export default Homepage;
