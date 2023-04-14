import React from "react";
import logo from "../../assets/Images/sneakers.png";
import basket from "../../assets/Images/Basket-1.png";
import user from "../../assets/Images/creator.png";
import { Navigation } from "../../Styles/Navbar.styled";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Navigation>
      <div className="menu">
        <a href="#">
          <img className="logo" src={logo} alt="Sneakers" />
        </a>

        <ul>
          <li>
            <Link to="/#">Collections</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/#">Women</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="cart">
        <a href="#">
          <img className="basket" src={basket} alt="Basket" />
          <div className="cart-quantity">
            <input className="update-amount" type="text" value="0" />
          </div>
        </a>
        <a href="#">
          <img className="user" src={user} alt="User" />
        </a>
      </div>
    </Navigation>
  );
}
