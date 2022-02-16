import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img
        className="iconeH"
        src="https://st.depositphotos.com/1095822/1378/i/600/depositphotos_13787172-stock-photo-gold-crown.jpg"
      ></img>
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
