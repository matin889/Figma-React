import React from "react";
import logo from "../../assets/Images/sneakers.png";
import basket from "../../assets/Images/Basket-1.png";
import user from "../../assets/Images/creator.png";
import { Navigation } from "../../Styles/Navbar.styled";

export default function Navbar() {
  return (
    <Navigation>
      <img className="logo" src={logo} alt="Sneakers" />

      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <img className="basket" src={basket} alt="Basket" />

      <img className="user" src={user} alt="User" />
    </Navigation>
  );
}
