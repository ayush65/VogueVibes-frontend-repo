import React from "react";
import "./Footer.css";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-div">
      <p>{`Made   with   </>   by   Ayush  Prakash `}</p>
      <div className="personal-tags">
        <a
          href="https://www.linkedin.com/in/ayush-prakash-6658b11b5/"
          className="links-tags nav-links"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/ayush65" className="links-tags nav-links">
          <AiFillGithub />
        </a>
      </div>
      <p>© 2023 </p>
    </div>
  );
};

export default Footer;
