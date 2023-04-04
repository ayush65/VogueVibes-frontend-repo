/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const SideBar = () => {
  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem("LoginState") || true)
  );

  useEffect(() => {
    const LoginState = JSON.stringify(login);

    localStorage.setItem("LoginState", LoginState);

    const str = localStorage.getItem("LoginState");

    const parsedObj = JSON.parse(str);

    console.log(parsedObj);

    setLogin(parsedObj);
  }, [login]);
  return (
    <div className="sidebar">
      <Link to="/products" className="sidebar-element">
        Product
      </Link>
      <Link to="/wishlist" className="sidebar-element">
        Wishlist
      </Link>
      <Link to="/cart" className="sidebar-element">
        Cart
      </Link>
      <Link to="/account" className="sidebar-element">
        {" "}
        Account
      </Link>

      {login ? (
        <div className="div-sidebar-buttons">
          <Link to="/login" className="  login-button-">
            Login
          </Link>

          <Link to="/signup" className="login-button-">
            Signup
          </Link>
        </div>
      ) : (
        <div className="div-sidebar-buttons">
          <Link
            to="/logout"
            className="login-button-"
            onClick={() => {
              setLogin(true);
              localStorage.removeItem("username");
              localStorage.removeItem("userObj");
            }}
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default SideBar;
