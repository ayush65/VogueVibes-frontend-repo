/** @format */

import React, { useEffect, useState } from "react";
import "./Cart.css";
import CartProducts from "./CartProducts/CartProducts";
const Cart = () => {
  const [cartArray, setCartArray] = useState([]);
  useEffect(() => {
    const str = localStorage.getItem("cartObj");

    const parsedObj = JSON.parse(str);

    setCartArray(parsedObj);
  }, []);

  return (
    <>
      <div>
        {" "}
        <CartProducts data={cartArray} />
      </div>
    </>
  );
};

export default Cart;
