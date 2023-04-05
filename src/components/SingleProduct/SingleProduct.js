import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { MdLocalOffer } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const SingleProduct = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("singleProduct") || "[]")
  );
  const [array, setArray] = useState(
    JSON.parse(localStorage.getItem("cartObj") || "[]")
  );
  const [WishlistArray, setWishlistArray] = useState(
    JSON.parse(localStorage.getItem("wishlistObj") || "[]")
  );

  console.log(data);

  const notify = () => toast.dark("Added To Cart");

  const notify1 = () => toast.dark("Added To Wishlist");

  const notify2 = () => toast.dark("Product Already Exists");

  useEffect(() => {
    const cartObj = JSON.stringify(array);

    localStorage.setItem("cartObj", cartObj);

    const wishlistObj = JSON.stringify(WishlistArray);

    localStorage.setItem("wishlistObj", wishlistObj);
  }, [array, WishlistArray]);

  const [points, setPoints] = useState(0); // initialize points state to 0

  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    switch (randomNumber) {
      case 1:
        setPoints(points + 1);
        break;
      case 2:
        setPoints(points + 2);
        break;
      case 3:
        setPoints(points + 3);
        break;
      case 4:
        setPoints(points + 4);
        break;
      case 5:
        setPoints(points + 5);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    generateRandomNumber();
  }, []);

  return (
    <div className="single-product-container">
      <div className="single-product-div1">
        <Link to="/products" className="link-product">
          Back
        </Link>
        <img src={data.imgUrl} className="single-product-image" alt=""></img>
        <div className="single-product-container-buttons">
          {" "}
          <button
            className="btn--single-product-cart"
            onClick={() => {
              console.log(array);
              const myElement = array.filter((obj) => obj.name === data.name);

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
                      name: data.name,
                      img: data.imgUrl,
                      discountedPrice: data.discountedPrice,
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
          <button
            className="btn--single-product-wishlist"
            onClick={() => {
              console.log(WishlistArray);
              console.log("clicked");
              const myElement = WishlistArray.filter(
                (obj) => obj.name === data.name
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
                      name: data.name,
                      img: data.imgUrl,
                      discountedPrice: data.discountedPrice,
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

      <div className="product-div2">
        <h1>{data.name}</h1>
        <p className="green-text">Special Price</p>
        <div className="single-product-price">
          {" "}
          <h1>Rs{data.ActualPrice}</h1>
          <p className="color-grey-price">Rs{data.discountedPrice}</p>
          <p className="green-text">15 % off</p>
        </div>
        <div className="single-product-price">
          <p className="product-rating">{points} ★</p>{" "}
          <p className="color-grey">
            {Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000} ratings
          </p>
          <p className="color-grey">
            {" "}
            {Math.floor(Math.random() * (1000 - 500 + 1)) + 500} reviews
          </p>
        </div>
        <h3>Description</h3>
        <div className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <h3>Available offers</h3>
        <div className="div-coupons">
          <div className="green-text">
            <MdLocalOffer />
          </div>
          <p>
            Special PriceGet extra 15% off (price inclusive of
            cashback/coupon)T&C
          </p>
        </div>
        <div className="div-coupons">
          {" "}
          <div className="green-text">
            <MdLocalOffer />
          </div>
          <p> Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</p>
        </div>

        <div className="div-coupons">
          {" "}
          <div className="green-text">
            <MdLocalOffer />
          </div>
          <p>
            Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift
            Card worth up to ₹500*Know More
          </p>
        </div>
        <div className="div-coupons">
          {" "}
          <div className="green-text">
            <MdLocalOffer />
          </div>
          <p>Partner OfferEarn 50 Super_Coins_Men's SportsFootwearKnow More</p>
        </div>

        <div>
          <p>Deliver to</p>
          <input className="input-product" placeholder="Check Pincode here" />

          <p>
            Delivery by9 Apr, Sunday <br />
            <br />
            Free₹40? if ordered before 1:07 AM
          </p>
        </div>
      </div>
      <>
        {" "}
        <ToastContainer />
      </>
    </div>
  );
};

export default SingleProduct;
