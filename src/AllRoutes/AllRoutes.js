/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Account from "../components/Account/Account";
import Cart from "../components/Cart/Cart";
import Homepage from "../components/Homepage";
import Landingpage from "../components/LandingPage/Landingpage";
import Login from "../components/Login/Login";
import Logout from "../components/Logout/Logout";
import PlaceOrder from "../components/PlaceOrder/PlaceOrder";
import Signup from "../components/Signup/Signup";
import Wishlist from "../components/Wishlist/Wishlist";
import SingleProduct from "../components/SingleProduct/SingleProduct";

function RoutesPath() {
  return (
    <>
      <Routes>
        <Route path="/singleproduct" element={<SingleProduct />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/placeorder" element={<PlaceOrder />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route exact path="/products" element={<Homepage />}></Route>
        <Route exact path="/" element={<Landingpage />}></Route>
      </Routes>
    </>
  );
}

export default RoutesPath;
