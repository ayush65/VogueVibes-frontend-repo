/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const [arr, setArr] = useState(["ayush65"]);

  const [arr] = useState(JSON.parse(localStorage.getItem("UsersData") || "[]"));

  const LoginHandler = () => {
    if (username === "" || password === "") {
      return alert("Please enter Proper Details");
    }

    axios
      .get("https://angry-bird-eccomerce-backend-6e2m.vercel.app/api/v1/users")
      .then(function (response) {
        // const usersData = response.data;

        // usersData.map((item) => {
        //   console.log(item.name);

        //   arr.push(item.name);
        //   console.log(arr);
        // });

        arr.push(username);
      })
      .catch(function (error) {
        console.log(error);
      });

    if (arr.includes(username)) {
      alert("Account Already exist");
    } else {
      axios
        .post("https://vogue-vibes-backend-repo.vercel.app/api/v1/users", {
          name: username,
          password: password,
        })
        .then(function (response) {
          console.log(response);

          setPassword("");
          setUsername("");
          alert("Account made successfully");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    const usersDataObj = JSON.stringify(arr);

    localStorage.setItem("UsersData", usersDataObj);

    arr.push("ayush65");
  }, [arr]);

  return (
    <div className="login-container">
      <div>
        <img
          src="https://cdna.artstation.com/p/assets/images/images/027/682/158/original/liz-gross-signup.gif?1592246526"
          alt="signup-img"
          className="signup-page-img"
        />
      </div>
      <div className="signup-div-container">
        <p>Signup for Vogue Vibes</p>

        <div className="signup-buttons">
          <input
            type="text"
            placeholder="Username"
            className="signup-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="signup-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="address-modal-btn btn-login" onClick={LoginHandler}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
