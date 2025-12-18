import React from "react";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import logo from "../assets/nav-images/logo.png";
import "./styles/Navbar.css";

const Navbar = ({ toggleSidebar, toggleCart }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="menu-icon" onClick={toggleSidebar}>☰</span>
        <img src={logo} alt="Aurora Market" className="navbar-logo" />
        <span className="brand-name">Aurora Market</span>
      </div>

      <div className="navbar-search">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="navbar-icons">
        <FiUser className="nav-icon" />
        <FiShoppingCart
          className="nav-icon"
          onClick={toggleCart}
        />
      </div>
    </nav>
  );
};

export default Navbar;
