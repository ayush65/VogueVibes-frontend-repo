/** @format */

import React from "react";
import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-container">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <a className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
