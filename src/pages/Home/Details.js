import React, { useEffect, useState } from "react";
import website from "../../components/shared/UIElements/website.svg";
import react from "../../components/shared/UIElements/react.png";
import node from "../../components/shared/UIElements/node.png"
import aws from "../../components/shared/UIElements/aws.png"
import python from "../../components/shared/UIElements/python.png"
import docker from "../../components/shared/UIElements/docker.png"
import "./Details.css";

const Details = () => {

  const [show, handleShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 750) {
      handleShow(true);
    } else handleShow(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll",handleScroll, false);
  }
  }, []);

  return (
    <React.Fragment>
      <div className="details">
        <img src={website} alt="website_img" />
      </div>
      <div className="container">
        <div>
          <h1> Our major technologies </h1>
          <hr className={`extend ${show && "extend_animated"} `}/>
        </div>
        <div className={`ball ${show && "ball_extend"} `}>
          <img id="logo1" src={react} alt="" />
          <img id="logo2" src={node} alt="" />
          <img id="logo3" src={aws} alt="" />
          <img id="logo3" src={python} alt="" />
          <img id="logo3" src={docker} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Details;
