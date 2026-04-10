import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
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

      {/* Desktop links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Početna</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>O nama</Link>
        </li>
        <li>
          <Link to="/guide" onClick={() => setMenuOpen(false)}>
            Bezglutenski vodič
          </Link>
        </li>
        <li>
          <Link to="/donations" onClick={() => setMenuOpen(false)}>
            Donacije
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Kontakt
          </Link>
        </li>
        <li>
          <a href="/join" className="btn-nav">
            Postanite član
          </a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </nav>
  );
};

export default Navbar;