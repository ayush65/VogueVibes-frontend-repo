/** @format */

import React, { useEffect, useState } from "react";
import { useFilter } from "../../Context/FilterContext";
import Pagination from "../Pagination/Pagination";
import SkeletonLoading from "../SkeletonLoading/SkeletonLoading";
import "./Card.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import { Link, Navigate } from "react-router-dom";
import SingleProduct from "../SingleProduct/SingleProduct";

const Card = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const [array, setArray] = useState(
    JSON.parse(localStorage.getItem("cartObj") || "[]")
  );

  const [WishlistArray, setWishlistArray] = useState(
    JSON.parse(localStorage.getItem("wishlistObj") || "[]")
  );

  const [isCartButtonClicked, setIsCartButtonClicked] = useState(true);

  // console.log(array);

  const { state } = useFilter();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = state.product.slice(indexOfFirstPost, indexOfLastPost);

  const searchedComments = currentPosts.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const notify = () => toast.dark("Added To Cart");

  const notify1 = () => toast.dark("Added To Wishlist");

  const notify2 = () => toast.dark("Product Already Exists");

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [loading, setLoading] = useState(true);

  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    const cartObj = JSON.stringify(array);

    localStorage.setItem("cartObj", cartObj);

    const wishlistObj = JSON.stringify(WishlistArray);

    localStorage.setItem("wishlistObj", wishlistObj);
  }, [array, WishlistArray]);

  useEffect(() => {
    const singleProd = JSON.stringify(singleProduct);

    localStorage.setItem("singleProduct", singleProd);
  }, [singleProduct]);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  const [redirectToAnotherPage, setRedirectToAnotherPage] = useState(false);

  if (redirectToAnotherPage) {
    return <Navigate to="/singleproduct" />;
  }

  if (loading) {
    return <SkeletonLoading />;
  }

  return (
    <div>
      <div className="card-flex">
        {loading ? <SkeletonLoading /> : null}

        {searchedComments.map((item, i) => {
          return (
            <div
              className=""
              key={i}
              onClick={() => {
                setSingleProduct(item);
              }}
            >
              <div>
                <div className="card">
                  <div
                    className="card__imageContainer"
                    onClick={() =>
                      setRedirectToAnotherPage(!redirectToAnotherPage)
                    }
                  >
                    <img src={item.imgUrl} alt="" className="card__image" />
                  </div>

                  <div className="card__contentContainer">
                    <div className="card-contents-names">
                      {" "}
                      <h2>{item.name}</h2>
                      <div className="card__price">
                        <div> Rs {item.discountedPrice}</div>
                        <div className="card-price-container">
                          <div className="card-ActualPrice">
                            Rs{item.ActualPrice}
                          </div>
                          <div className="line-cut"></div>
                        </div>
                      </div>
                      {isCartButtonClicked ? (
                        <button
                          className="btn-card"
                          onClick={() => {
                            console.log(array);
                            const myElement = array.filter(
                              (obj) => obj.name === item.name
                            );

                            console.log(myElement);

                            if (myElement.length > 0) {
                              // do something if myElement exists
                              notify2();
                            } else {
                              setTimeout(() => {
                                setArray([
                                  ...array,
                                  {
                                    id: uuidv4(),
                                    name: item.name,
                                    img: item.imgUrl,
                                    discountedPrice: item.discountedPrice,
                                    quantity: 1,
                                  },
                                ]);
                              }, 1000);
                              notify();
                            }
                          }}
                        >
                          Add To Cart
                        </button>
                      ) : (
                        <button>Move to Cart</button>
                      )}
                      <button
                        className="btn-card"
                        onClick={() => {
                          console.log(array);
                          const myElement = WishlistArray.filter(
                            (obj) => obj.name === item.name
                          );

                          console.log(myElement);

                          if (myElement.length > 0) {
                            // do something if myElement exists
                            notify2();
                          } else {
                            setTimeout(() => {
                              setWishlistArray([
                                ...WishlistArray,
                                {
                                  id: uuidv4(),
                                  name: item.name,
                                  img: item.imgUrl,
                                  discountedPrice: item.discountedPrice,
                                },
                              ]);
                            }, 1000);
                            notify1();
                          }
                        }}
                      >
                        Add To Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>{" "}
      <div className="div-pagination">
        {state.product.length > 1 ? (
          <Pagination
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            totalPosts={state.product.length}
            paginate={paginate}
          />
        ) : null}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Card;
