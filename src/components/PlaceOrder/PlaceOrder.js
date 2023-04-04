/** @format */

import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import AddressManagement from "../AdressManagement/AddressManagement";
import "./PlaceOrder.css";
import PriceDetailsCard from "./PriceDetailsCard";

const PlaceOrder = () => {
  const [loginState] = useState(
    JSON.parse(localStorage.getItem("LoginState") || true)
  );

  if (loginState) {
    return <Navigate replace to='/login' />;
  }
  return (
    <div className='place-order'>
      <AddressManagement />
      <PriceDetailsCard />
    </div>
  );
};

export default PlaceOrder;
