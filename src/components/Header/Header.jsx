import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <nav className="nav">
        <p className="nav-item">Home</p>
        <p className="nav-item">Projects</p>
        <p className="nav-item">About</p>
        <p className="nav-item">Contact</p>
      </nav>
    </div>
  );
}

export default Header;
