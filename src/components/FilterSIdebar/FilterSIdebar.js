/** @format */

import React, { useState } from "react";
import "./FilterSidebar.css";
import { RiFilterFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { useFilter } from "../../Context/FilterContext";

const FilterSIdebar = () => {
  const [show, setShow] = useState(false);

  const { state, dispatch } = useFilter();
  const { price, category, sort } = state;

  const [categoryArr, setCategoryArr] = useState([]);

  // Triggered when the value gets updated while scrolling the slider:
  const handleInput = (e) => {
    if (categoryArr.includes(e.target.value)) {
    } else {
      categoryArr.push(e.target.value);
      console.log(categoryArr);
    }
  };

  return (
    <div className="filter-sidebar ">
      {show ? (
        <div className="filter-icon">
          <ImCross onClick={() => setShow(false)} />
        </div>
      ) : (
        <div className="filter-icon">
          <RiFilterFill onClick={() => setShow(true)} />
        </div>
      )}

      {show ? (
        <div className="ui-filter">
          <div>
            <button
              onClick={() => {
                dispatch({ type: "CLEAR_FILTER" });
              }}
              className="btn-cleared"
            >
              Clear All
            </button>
            <div className="filter-div2 ">Sort By Price</div>
            <div className="filter-div2-content ">
              <div>
                <input
                  type="checkbox"
                  className="filter-div2-content1 "
                  checked={state.sort === "HIGH_TO_LOW"}
                  onClick={() => {
                    dispatch({
                      type: "SORT_FILTER",
                      payload: { sort: "HIGH_TO_LOW" },
                    });
                    console.log("clicked");
                  }}
                />{" "}
                Low To High
              </div>
              <div>
                <input
                  type="checkbox"
                  className="filter-div2-content1 "
                  checked={state.sort === "LOW_TO_HIGH"}
                  onClick={() => {
                    dispatch({
                      type: "SORT_FILTER",
                      payload: { sort: "LOW_TO_HIGH" },
                    });
                    console.log("clicked");
                  }}
                />{" "}
                High to Low
              </div>
            </div>

            <div className="filter-div2 ">Category Filter</div>
            <div className="filter-div4">
              <div className="filter-div3">
                {" "}
                <input
                  type="checkbox"
                  value="Tshirt"
                  checked={category.includes("Tshirt")}
                  onChange={(e) => {
                    console.log(e.target.value);
                    handleInput(e);
                    dispatch({
                      type: "SORT_CATEGORY",
                      payload: { category: e.target.value },
                    });
                  }}
                />{" "}
                <p>Tshirts</p>
              </div>
              <div className="filter-div3">
                {" "}
                <input
                  type="checkbox"
                  value="Jeans"
                  checked={category.includes("Jeans")}
                  onChange={(e) => {
                    console.log(e.target.value);
                    handleInput(e);
                    dispatch({
                      type: "SORT_CATEGORY",
                      payload: { category: e.target.value },
                    });
                  }}
                />{" "}
                <p>Jeans</p>
              </div>
              <div className="filter-div3">
                {" "}
                <input
                  type="checkbox"
                  value="Shoes"
                  checked={category.includes("Shoes")}
                  onChange={(e) => {
                    console.log(e.target.value);
                    handleInput(e);
                    dispatch({
                      type: "SORT_CATEGORY",
                      payload: { category: e.target.value },
                    });
                  }}
                />{" "}
                <p>Shoes</p>
              </div>
              <div className="filter-div3">
                {" "}
                <input
                  type="checkbox"
                  value="Cap"
                  checked={category.includes("Cap")}
                  onChange={(e) => {
                    console.log(e.target.value);
                    handleInput(e);
                    dispatch({
                      type: "SORT_CATEGORY",
                      payload: { category: e.target.value },
                    });
                  }}
                />{" "}
                <p>Cap</p>
              </div>
              <div className="filter-div3">
                {" "}
                <input
                  type="checkbox"
                  value="Tops"
                  checked={category.includes("Tops")}
                  onChange={(e) => {
                    console.log(e.target.value);
                    handleInput(e);
                    dispatch({
                      type: "SORT_CATEGORY",
                      payload: { category: e.target.value },
                    });
                  }}
                />{" "}
                <p>Tops</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FilterSIdebar;
