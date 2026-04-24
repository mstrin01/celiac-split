import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="logo">
        <img src={Logo} alt="Logo" className="logo-icon" />
        <div className="logo-text">
          <span>Splitsko-dalmatinsko</span>
          <span>društvo za celijakiju</span>
        </div>
      </Link>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Početna
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            O nama
          </NavLink>
        </li>

        <li>
          <NavLink to="/guide" onClick={() => setMenuOpen(false)}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Bezglutenski vodič
          </NavLink>
        </li>

        <li>
          <NavLink to="/donations" onClick={() => setMenuOpen(false)}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Donacije
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Kontakt
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/join"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "btn-nav active-btn" : "btn-nav"
            }
          >
            Postanite član
          </NavLink>
        </li>

      </ul>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;