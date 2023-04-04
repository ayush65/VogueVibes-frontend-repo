/** @format */

import React, { useEffect, useState } from "react";
import CartDetails from "../CartDetails/CartDetails";
import "./CartProducts.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cartImage from "./empty-cart-unscreen.gif";

const CartProducts = () => {
  const [array, setArray] = useState([]);
  const [updatedArray, setUpdatedArray] = useState(
    JSON.parse(localStorage.getItem("cartObj") || "[]")
  );

  const [totalsum, setTotalSum] = useState(0);

  const [WishlistArray, setWishlistArray] = useState(
    JSON.parse(localStorage.getItem("wishlistObj") || "[]")
  );

  const notify = () => toast.dark("Removed from cart");

  const notify1 = () => toast.dark("Moved to Wishlist");
  const notify2 = () => toast.dark("Product Already Exists");
  useEffect(() => {
    const str = JSON.parse(localStorage.getItem("cartObj") || "[]");

    const updatedItems = str ? str.filter((item) => item.id !== array.id) : [];
    setUpdatedArray(updatedItems);
    localStorage.setItem("cartObj", JSON.stringify(updatedItems));
    console.log(JSON.parse(localStorage.getItem("cartObj")));

    const wishlistObj = JSON.stringify(WishlistArray);

    localStorage.setItem("wishlistObj", wishlistObj);
  }, [setArray, array, WishlistArray]);

  function incrementItemQuantity(itemId) {
    const itemIndex = updatedArray.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      const newItems = [...updatedArray];
      newItems[itemIndex].quantity += 1;
      setUpdatedArray(newItems);
    }
  }

  function decrementItemQuantity(itemId) {
    const itemIndex = updatedArray.findIndex((item) => item.id === itemId);
    console.log(itemIndex);

    if (itemIndex !== -1) {
      const newItems = [...updatedArray];
      console.log(newItems[itemIndex].quantity);
      if (newItems[itemIndex].quantity < 2) {
        return 1;
      } else {
        newItems[itemIndex].quantity -= 1;
      }
      setUpdatedArray(newItems);
    }
  }

  useEffect(() => {
    localStorage.setItem("cartObj", JSON.stringify(updatedArray));
  }, [updatedArray]);

  return (
    <>
      <ToastContainer />
      <div className="cart-products">
        {updatedArray.length === 0 && (
          <div>
            <img src={cartImage} /> <h2>Your Cart is Empty</h2>
          </div>
        )}
        {updatedArray.map((item) => {
          return (
            <div key={item.id} className="cart-products-card">
              <img src={item.img} alt="item-img" className="item-cart-img" />
              <h1>{item.name}</h1>
              <p>Price :- Rs {item.discountedPrice}</p>
              <div className="div-buttons">
                <button
                  onClick={() => {
                    decrementItemQuantity(item.id);
                  }}
                  className="cart-product-btn"
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  className="cart-product-btn"
                  onClick={() => {
                    incrementItemQuantity(item.id);
                  }}
                >
                  +
                </button>
              </div>
              <div>
                <button
                  className="btn-card-cart"
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
                            id: item.id,
                            name: item.name,
                            img: item.img,
                            discountedPrice: item.discountedPrice,
                          },
                        ]);
                      }, 100);
                      setArray(item);
                      notify1();
                    }
                  }}
                >
                  Move to Wishlist
                </button>
                <button
                  className="btn-card-cart"
                  onClick={() => {
                    setArray(item);
                    notify();
                  }}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <CartDetails data={updatedArray} totalsum={totalsum} />
    </>
  );
};

export default CartProducts;
