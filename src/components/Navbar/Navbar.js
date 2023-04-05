/** @format */

import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { BsFillBagCheckFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaSun, FaMoon } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem("LoginState") || true)
  );

  useEffect(() => {
    const LoginState = JSON.stringify(login);

    localStorage.setItem("LoginState", LoginState);

    const str = localStorage.getItem("LoginState");

    const parsedObj = JSON.parse(str);

    setLogin(parsedObj);
  }, [login]);

  const [mode, setMode] = useState(
    () => localStorage.getItem("mode") || "light"
  );

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  function toggleMode() {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    window.location.reload();
  }

  return (
    <nav
      className={mode === "dark" ? "navbar dark-mode " : " navbar light-mode "}
    >
      <div className="navbar-hamburger">
        {" "}
        {show ? (
          <ImCross onClick={() => setShow(false)} />
        ) : (
          <GiHamburgerMenu onClick={() => setShow(true)} />
        )}
      </div>

      {show ? <SideBar /> : null}

      <h1 className="navbar-logo">VogueVibes</h1>
      <div className="nav-links-container">
        <a onClick={toggleMode} className="nav-links">
          {mode === "light" ? <FaMoon /> : <FaSun />}
        </a>
        <Link to="/products" className="nav-links">
          <BsFillBagCheckFill />
        </Link>
        <Link to="/wishlist" className="nav-links">
          <AiOutlineHeart />
        </Link>
        <Link to="/cart" className="nav-links">
          <AiOutlineShoppingCart />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
