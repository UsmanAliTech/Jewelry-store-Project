import React from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg mb-lg-0 mb-5 sticky-top modern-navbar">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
         
          <span className="brand-text">💎 JewelLux</span>
        </Link>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-links">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/collection">Collection</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/cart"><BsCart4 /></Link></li>
          </ul>

          <form className="d-flex ms-lg-3 mt-3 mt-lg-0 search-form">
            <input
              className="form-control me-2 search-input"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <button className="btn search-btn" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};
