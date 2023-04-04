/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PlaceOrder.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const PriceDetailsCard = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [count, setCount] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const [updatedArray, setUpdatedArray] = useState([]);

  const deliveryCharge = 99;

  const [razorpayPrice, setRazorPayPrice] = useState(0);

  const [array] = useState([]);

  const [cartArray, setCartArray] = useState(
    JSON.parse(localStorage.getItem("cartObj") || "[]")
  );

  useEffect(() => {

    const cartObj = JSON.stringify(cartArray);

    localStorage.setItem("cartObj", cartObj);

    const str = JSON.parse(localStorage.getItem("cartObj"));

    const updatedItems = str ? str.filter((item) => item.id !== array.id) : [];
    localStorage.setItem("cartObj", JSON.stringify(updatedItems));
    console.log(JSON.parse(localStorage.getItem("cartObj")));
    setUpdatedArray(updatedItems);
    var total = updatedItems.reduce(
      (accum, item) => accum + item.discountedPrice * item.quantity,
      0
    );

    console.log(total);
    //console.log(total);
    setCount(total);
    const discountedPrice = (total / 100) * 15;
    setDiscountedPrice(discountedPrice);

    const totalprice = total - discountedPrice + deliveryCharge;
    setRazorPayPrice(totalprice * 100);
    setTotalPrice(totalprice);
  }, [cartArray]);

  console.log(razorpayPrice);

  const [razorpayResponseId, setRazorpayResponseId] = useState("");

  const options = {
    key: "rzp_test_HJG5Rtuy8Xh2NB",
    amount: razorpayPrice,
    name: "Angry Bird Store",
    description: "angry with franchise store",
    image: "https://assets.stickpng.com/images/584c69846e7d5809d2fa6366.png",
    handler: function (response) {
      setRazorpayResponseId(response.razorpay_payment_id);
      if (response.razorpay_payment_id) {
        onOpenModal();
        setCartArray([]);
      }
    },
    prefill: {
      name: "Ayush",
      contact: "9999999999",
      email: "demo@demo.com",
    },
    notes: {
      address: "some address",
    },
    theme: {
      color: "#2F4858;",
      hide_topbar: false,
    },
  };

  const openPayModal = (options) => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="price-details">
      {" "}
      <div className="order-price-Details">
        <div className="price-order-details-container">
          <h1>Order Details</h1>
          <div className="cart-details-bar"></div>
          <div className="cart-details-price">
            <p>Price ({updatedArray.length} items )</p>
            <p>Rs. {count}</p>
          </div>
          <div className="cart-details-price">
            <p>Discount (15%)</p>
            <p>- Rs. {discountedPrice}</p>
          </div>
          <div className="cart-details-price">
            <p>Delivery Charge</p>
            {updatedArray.length > 0 ? <p>Rs {deliveryCharge}</p> : <p>Rs 0</p>}
          </div>
          <div className="cart-details-bar"></div>
          <div className="cart-details-price">
            <p>Total Price</p>
            {updatedArray.length > 0 ? <p>Rs {totalPrice}</p> : <p>Rs 0</p>}
          </div>
          <Link
            to="/placeorder"
            className="place-order-btn btn-checkout"
            onClick={() => {
              openPayModal(options);
            }}
          >
            Pay Now
          </Link>
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <h2 className="modal-transaction-id">
          Transaction Id :- {razorpayResponseId}
        </h2>
        <img
          src="https://thumbs.gfycat.com/GracefulImpishFlea-size_restricted.gif"
          alt=""
        />
      </Modal>
    </div>
  );
};

export default PriceDetailsCard;
