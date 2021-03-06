import React from "react";
import { NavLink } from "react-router-dom";

// import { AuthContext } from "../../context/auth-context";
import "./NavLinks.css";

const NavLinks = (props) => {
  // const auth = useContext(AuthContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          HOME
        </NavLink>
      </li>
      {/* {auth.isLoggedIn && ( */}
      <li>
        <NavLink to="/projects">PROJECTS</NavLink>
      </li>
      {/* )} */}
      {/* {( !auth.isLoggedIn && */}
      <li>
        <NavLink to="/about">ABOUT</NavLink>
      </li>
      {/* )} */}
      {/* {auth.isLoggedIn && (
      <li>
        <button onClick={auth.logout} >LOGOUT</button>
      </li>
    )} */}
    </ul>
  );
};

export default NavLinks;
