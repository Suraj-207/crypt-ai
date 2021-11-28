import React from "react";
import client from "../../components/shared/UIElements/client1.svg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src={client} alt="client_img" />
      <div className="banner_content">
        <h1>A Tech-Driven startup for cutting-edge technologies.</h1>
        <p>We offer our clients broad range of solutions in software world in a minimum timeframe with great security.</p>
      </div>
    </div>
  );
};

export default Banner;
