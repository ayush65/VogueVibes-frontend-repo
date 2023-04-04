/** @format */

import React from "react";
import "./SkeletonLoading.css";
import img from "./img.gif";

const SkeletonLoading = () => {
  return (
    <div className="SkeletonLoading">
      {" "}
      <div className="SkeletonLoading-content">
        <img src={img} alt="" className="app-img" />
      </div>
    </div>
  );
};

export default SkeletonLoading;
