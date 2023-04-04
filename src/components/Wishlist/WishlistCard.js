/** @format */

import React, { useEffect, useState } from "react";
import "./Wishlist.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import wishlistImage from "./icegif-498-unscreen.gif";

const WishlistCard = () => {
  const [array, setArray] = useState([]);
  const [updatedArray, setUpdatedArray] = useState([]);

  const [Cartarray, setCartArray] = useState(
    JSON.parse(localStorage.getItem("cartObj") || "[]")
  );

  const notify = () => toast.dark(" Product Moved To Cart");

  const notify1 = () => toast.dark("Product Removed from Wishlist");

  const notify2 = () => toast.dark("Product Already Exists");

  useEffect(() => {
    const cartObj = JSON.stringify(Cartarray);

    localStorage.setItem("cartObj", cartObj);

    const str = localStorage.getItem("wishlistObj");

    const parsedObj = JSON.parse(str);

    const updatedItems = parsedObj.filter((item) => item.id !== array.id);
    setUpdatedArray(updatedItems);
    localStorage.setItem("wishlistObj", JSON.stringify(updatedItems));
    console.log(JSON.parse(localStorage.getItem("wishlistObj")));
  }, [array, Cartarray]);

  return (
    <>
      <ToastContainer />
      <h1 className="wishlist-container">
        Wishlist :- {updatedArray.length} Items
      </h1>

      <div className="wishlist">
        {updatedArray.length === 0 && (
          <div>
            <img src={wishlistImage} alt="img" />
            <h1>Your wishlist is empty</h1>
          </div>
        )}

        {updatedArray.map((item) => {
          return (
            <div key={item.id} className="wishlist-products-card">
              <img
                src={item.img}
                alt="item-img"
                className="item-wishlist-img"
              />
              <h1>{item.name}</h1>
              <p>Price :- Rs {item.discountedPrice}</p>

              <button
                className="btn-card btn-wislist"
                onClick={() => {
                  console.log("hi");
                  console.log(Cartarray);
                  // const myElement = Cartarray.find((obj) => obj.id === item.id);
                  const myElement = Cartarray.filter(
                    (obj) => obj.name === item.name
                  );

                  console.log(myElement);

                  if (myElement.length > 0) {
                    // do something if myElement exists
                    notify2();
                  } else {
                    // do something else if myElement doesn't exist

                    setArray(item);
                    setTimeout(() => {
                      setCartArray([
                        ...Cartarray,
                        {
                          id: item.id,
                          name: item.name,
                          img: item.img,
                          discountedPrice: item.discountedPrice,
                          quantity: 1,
                        },
                      ]);
                    }, 100);
                    notify();
                  }
                }}
              >
                Move to Cart
              </button>
              <button
                className="btn-card btn-wislist"
                onClick={() => {
                  setArray(item);
                  notify1();
                }}
              >
                Remove from Wishlist
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WishlistCard;
