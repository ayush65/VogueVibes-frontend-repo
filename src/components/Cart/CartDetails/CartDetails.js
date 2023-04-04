/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CartDetails.css";

const CartDetails = ({ data }) => {
  // console.log(data.dalPriceiscountedPrice);

  const [count, setCount] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const deliveryCharge = 99;

  useEffect(() => {
    var total = data.reduce((accum, item) => accum + item.discountedPrice * item.quantity, 0);
    //console.log(total);
    setCount(total);
    const discountedPrice = (total / 100) * 15;
    setDiscountedPrice(discountedPrice);

    const totalprice = total - discountedPrice + deliveryCharge;
    setTotalPrice(totalprice);
  }, [data]);

  return (
    <>
      <div className='CartDetails'>
        <div className='cart-details-container'>
          <h1>Price Details</h1>
          <div className='cart-details-bar'></div>
          <div className='cart-details-price'>
            <p>Price ({data.length} items )</p>
            <p>Rs. {count}</p>
          </div>
          <div className='cart-details-price'>
            <p>Discount (15%)</p>
            <p>- Rs. {discountedPrice}</p>
          </div>
          <div className='cart-details-price'>
            <p>Delivery Charge</p>
            {data.length > 0 ? <p>Rs {deliveryCharge}</p> : <p>Rs 0</p>}
          </div>
          <div className='cart-details-bar'></div>
          <div className='cart-details-price'>
            <p>Total Price</p>
            {data.length > 0 ? <p>Rs {totalPrice}</p> : <p>Rs 0</p>}
          </div>
          <Link to='/placeorder' className='place-order-btn'>
            Place Order
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
