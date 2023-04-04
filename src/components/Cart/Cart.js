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

  const [mode, setMode] = useState(
    () => localStorage.getItem("mode") || "light"
  );

  return (
    <>
      <div
        className={mode === "dark" ? " cart dark-mode " : "  cart light-mode "}
      >
        {" "}
        <CartProducts data={cartArray} />
      </div>
    </>
  );
};

export default Cart;
