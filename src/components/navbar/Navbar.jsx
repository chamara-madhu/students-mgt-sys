import React from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar sticky-top p-3 client-nav-bar">
      <Link
        to="/dashboard"
        className="text-white"
        style={{ textDecoration: "none" }}
      >
        Students Management System
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="fas fa-cog"></i> Set Attributes
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
