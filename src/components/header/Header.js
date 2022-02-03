import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <h1>ceci est mon header</h1>
      <div className="headerButton">
        <NavLink to={"/"}>
          <button className="allBtn">Home</button>
        </NavLink>
        <NavLink to={"/royalfamily"}>
          <button className="allBtn">Royal Family</button>
        </NavLink>
        <NavLink to={"/royalassets"}>
          <button className="allBtn">Royal Assets</button>
        </NavLink>
        <NavLink to={"/contactus"}>
          <button className="allBtn">Contact Us</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
