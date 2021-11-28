import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="company">
          <h1>CRYPT-AI</h1>
        </div>
        <div className="footer_description">
          <h4>Useful links </h4>
          <p>HOME</p>
          <p>ABOUT</p>
          <p>SERVICES</p>
        </div>
      </div> 
      <div className="footer_down">
        <hr></hr>
        <p>
        © {year} CRYPT-AI. All right is reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
