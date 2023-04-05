import React, { useEffect, useRef, useState } from "react";
import "./LandingPage.css";
import { TiArrowSortedDown } from "react-icons/ti";
import Footer from "./Footer";
import MainImg from "./img.jpg";
import LandingImg from "./landing-img.png";
import { useFilter } from "../../Context/FilterContext";
import { Navigate } from "react-router-dom";

const Landingpage = () => {
  const ref = useRef(null);

  const handleScrollClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const { state } = useFilter();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    const singleProd = JSON.stringify(singleProduct);

    localStorage.setItem("singleProduct", singleProd);
  }, [singleProduct]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = state.product.slice(indexOfFirstPost, indexOfLastPost);

  const [redirectToAnotherPage, setRedirectToAnotherPage] = useState(false);

  if (redirectToAnotherPage) {
    return <Navigate to="/singleproduct" />;
  }

  return (
    <div className="div-landing-page">
      <h1 className="landing-label">Colouring Style</h1>
      <img src={LandingImg} alt="landingimg" className="landing-page-img" />
      <div className="landing-caption">
        <p>Don't be basic !</p> <p>Create your own style</p>
      </div>
      <div className="product-heading">
        <div>
          <h1 className="product-deading-landing">Discover Product</h1>
        </div>
      </div>
      <div className="card-landing-container">
        {" "}
        {currentPosts.slice(0, 4).map((item, i) => {
          return (
            <div
              className="card-landing"
              key={i}
              onClick={() => {
                setSingleProduct(item);
              }}
            >
              <img
                src={item.imgUrl}
                alt=""
                className="card-landing-img"
                onClick={() => setRedirectToAnotherPage(!redirectToAnotherPage)}
              />
              <h2>{item.name}</h2>
              <p>Rs{item.discountedPrice}</p>
            </div>
          );
        })}
      </div>

      <div className="img-container-landing">
        <img src={MainImg} alt="img" className="img-landing-2" />
        <h1 className="img-cover">Friday for All Colours * Disc</h1>
      </div>

      <div className="landing-arrow" onClick={handleScrollClick}>
        <TiArrowSortedDown />
        <div ref={ref}></div>
      </div>
    </div>
  );
};

export default Landingpage;
