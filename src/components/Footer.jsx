import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <h2 className="footer-brand">Aurora Market</h2>
      <p className="footer-tagline">Your one-stop online shop</p>

      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </div>

      <div className="footer-social">
        <FiFacebook />
        <FiInstagram />
        <FiTwitter />
      </div>

      <p className="footer-bottom">
        © 2025 Aurora Market. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;
