import React from "react";
import "./styles/Sidebar.css";

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <h3>Categories</h3>
      <ul>
        <li>Fashion</li>
        <li>Electronics</li>
        <li>Beauty</li>
        <li>Home & Living</li>
        <li>Accessories</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
