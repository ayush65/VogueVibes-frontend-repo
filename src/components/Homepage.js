/** @format */

import React, { useState } from "react";
import { useFilter } from "../Context/FilterContext";
import Card from "./Cards/Card";
import FilterSIdebar from "./FilterSIdebar/FilterSIdebar";
import Pagination from "./Pagination/Pagination";
import SearchBar from "./SearchBar/SearchBar";
import Footer from "./Footer/Footer";

const Homepage = () => {
  return (
    <div>
      {" "}
      <SearchBar />
      {/* <Card /> */}
      <FilterSIdebar />
      <Footer />
    </div>
  );
};

export default Homepage;
